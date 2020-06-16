import React, { Component } from 'react';
import styleCDS from "../CDS.scss"
import style from "./RadioButton.scss"

class RadioButton extends Component{
    
    
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
        let sss = style.checkmark;
        let isBroad = this.props.config.broad && true || false;
        let broadStyle = isBroad && style.radioButtonBroadItem || '';
        let dinamicClassName = `${style.radioButtonItem} ${broadStyle} `;
        let isInline= this.props.isInline || false;
        if(this.props.config.validationStatus === 2){
            sss = style.checkmark + " " + style.cBError;
            
        }
        return (
            <div className={style.radioBox}>
                {!isInline &&
                <React.Fragment>
                    <label className={style.filled} htmlFor={this.props.config.id}>{this.props.config.label}</label>
                    <div id={this.props.config.id} className={style.radioButtonContainer}>
                        
                        {this.props.config.options.map((option, i) =>
                                <label key={i} className={dinamicClassName}>
                                <span>{option.label}</span>
                                <input type="radio"  
                                       id={this.props.config.id+'_'+i} 
                                       name={this.props.config.id} 
                                       value={option.value}  
                                       ref={(input) => { this.checkBoxInput = input; }} 
                                       onChange={this.props.handleChange} 
                                       required={this.props.config.required} 
                                       disabled={this.props.config.disabled} 
                                       readOnly={this.props.config.readonly}
                                />
                                <span className={style.radioButton}></span>
                                </label>
                            
                        )}
    
                       
                    </div>
                    {this.props.config.validationStatus === 2 &&
                    <div className={styleCDS.error}><i className="dfmxs dfmxs-canvas-error"></i>{this.props.config.validationText.error}</div>
                    }
                </React.Fragment>
                }
                 {isInline &&
                <div className={style.radio_container_inline}>
                    <label className={style.filledMexican_inline} 
                            htmlFor={this.props.config.id}>
                                {this.props.config.label}
                    </label>
                    <div id={this.props.config.id} 
                            className={style.radioButtonContainer_inline}>
                        
                        {this.props.config.options.map((option, i) =>
                                <label key={i} className={style.radioButtonItem_inline}>
                                <span>{option.label}</span>
                                <input type="radio"  
                                       id={this.props.config.id+'_'+i} 
                                       name={this.props.config.id} 
                                       value={option.value}  
                                       ref={(input) => { this.checkBoxInput = input; }} 
                                       onChange={this.props.handleChange} 
                                       required={this.props.config.required} 
                                       disabled={this.props.config.disabled} 
                                       readOnly={this.props.config.readonly}
                                />
                                <span className={style.radioButton_inline}></span>
                                </label>
                            
                        )}
    
                       
                    </div>
                    {this.props.config.validationStatus === 2 &&
                    <div className={styleCDS.error}><i className="dfmxs dfmxs-canvas-error"></i>{this.props.config.validationText.error}</div>
                    }
                </div>
                }
            </div>
        );
    }
    
}

export default RadioButton;