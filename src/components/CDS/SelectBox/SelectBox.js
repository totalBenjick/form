import React, { Component } from 'react';
import styleCDS from "../CDS.scss"
import style from "./SelectBox.scss"


class SelectBox extends Component{
    
    
    constructor(props) {
        super(props);
        // [null -> Clean, 0 -> Info, 1 -> InfoInteractive, 2 -> Error , 3 -> Success]
    }
    
    componentDidMount(){
        // Attach events to the input raw DOM element
        let comp = this;
        this.selectInput.addEventListener("focus", function (e) {
            comp.props.handleRawEvents("focus", e);
        });
        this.selectInput.addEventListener("blur", function (e) {
            comp.props.handleRawEvents("blur", e);
        });
        this.selectInput.addEventListener("paste", function (e) {
            comp.props.handleRawEvents("paste", e);
        });
        this.selectInput.addEventListener("click", function (e) {
            comp.props.handleRawEvents("click", e);
        });
        this.selectInput.addEventListener("change", function (e) {
            comp.props.handleRawEvents("change", e);
        });
    }
    
    render(){

        return (
            <div className={style.selectBoxContainer}>
                
                <label htmlFor={this.props.config.id}>{this.props.config.label}</label>
                <select id={this.props.config.id} className={style.inputFont}
                    ref={(input) => { this.selectInput = input; }} 
                    onChange={this.props.handleChange} 
                    required={this.props.config.required}
                    disabled={this.props.config.disabled} 
                    readOnly={this.props.config.readonly} 
                    value={this.props.config.defaultValue} >
                    {this.props.config.options.map((currentValue, index, arr) => {
                        let disabled = currentValue.disabled === true ? "disabled" : "";
                        return <option value={currentValue.value} key={index} disabled={disabled}>{currentValue.label}</option>;
                    })}
                </select>
                
                {this.props.config.validationStatus === 2 &&
                    <div className={styleCDS.error}><i className="dfmxs dfmxs-canvas-error"></i>{this.props.config.validationText.error}</div>
                }
                {this.props.config.validationStatus === 1 &&
                    <div className={styleCDS.info}><i className="dfmxs dfmxs-canvas-info"></i>{this.props.config.validationText.info}</div>
                }
            </div>
        );
    }
    
}

export default SelectBox;