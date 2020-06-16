import React, { Component } from 'react';
import styleCDS from "../CDS.scss"
import style from "./CheckBox.scss"

class CheckBox extends Component{
    
    
    constructor(props) {
        super(props);
        // [null -> Clean, 0 -> Info, 1 -> InfoInteractive, 2 -> Error , 3 -> Success]  
        this.state = {
            displayInfoInteractiveText: false,
        };
    }
    
    componentDidMount(){
        // Attach events to the input raw DOM element
        let comp = this;
        this.checkBoxInput.addEventListener("focus", function (e) {
            comp.props.handleRawEvents("focus", e);
        });
        this.checkBoxInput.addEventListener("blur", function (e) {
            comp.props.handleRawEvents("blur", e);
        });
        this.checkBoxInput.addEventListener("paste", function (e) {
            comp.props.handleRawEvents("paste", e);
        });
        this.checkBoxInput.addEventListener("click", function (e) {
            comp.props.handleRawEvents("click", e);
        });
        this.checkBoxInput.addEventListener("change", function (e) {
            comp.props.handleRawEvents("change", e);
        });
    }
    
    toggleInteractiveText(event){
        event.preventDefault();
        if(this.state.displayInfoInteractiveText){
            this.setState({displayInfoInteractiveText: false});
        }else{
            this.setState({displayInfoInteractiveText: true});
        }
        
        this.props.config.analyticsClickDetail();
    }
    
    render(){
        var sss = style.checkmark;
        if(this.props.config.validationStatus === 2){
            sss = style.checkmark + " " + style.cBError;
            
        }
        return (
            <div>
                <label className={style.checkBoxContainer}>
                   
                   {this.props.config.label}
                    <input type="checkbox"  id={this.props.config.id} name={this.props.config.name} ref={(input) => { this.checkBoxInput = input; }} onChange={this.props.handleChange} required={this.props.config.required} disabled={this.props.config.disabled} readOnly={this.props.config.readonly}/>
                    <span className={sss}></span>
                    {this.props.config.details === true &&
                        <span className={style.moreDetails}>
                            <span className={styleCDS.cds3_caption} onClick={(event) => this.toggleInteractiveText(event)}>
                                {this.props.config.detailsTitle}
                                {this.state.displayInfoInteractiveText === true &&
                                    <i className="dfmxs dfmxs-canvas-arrow-up" aria-hidden="true"></i>
                                }
                                {this.state.displayInfoInteractiveText === false &&
                                    <i className="dfmxs dfmxs-canvas-arrow-down" aria-hidden="true"></i>
                                }
                            </span>
                            {this.state.displayInfoInteractiveText === true &&
                                <span className={styleCDS.cds3_paragraphSmall + " " + style.details} onClick={(event) => event.preventDefault()}>
                                    {this.props.config.detailsContent}
                                </span>
                            }
                        </span>
                    }
                </label>
                {this.props.config.validationStatus === 2 &&
                <div className={styleCDS.error}><i className="dfmxs dfmxs-canvas-error"></i>{this.props.config.validationText.error}</div>
                }
            </div>
        );
    }
    
}

export default CheckBox;