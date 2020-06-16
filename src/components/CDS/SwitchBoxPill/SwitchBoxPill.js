import React, { Component } from 'react';
import styleCDS from "../CDS.scss"
import style from "./SwitchBoxPill.scss"

class SwitchBoxPill extends Component{
    
    
    constructor(props) {
        super(props);
        // [null -> Clean, 0 -> Info, 1 -> InfoInteractive, 2 -> Error , 3 -> Success]
    }
    
    componentDidMount(){
        // Attach events to the input raw DOM element
        let comp = this;
        this.switchBoxPillInputA.addEventListener("focus", function (e) {
            comp.props.handleRawEvents("focus", e);
        });
        this.switchBoxPillInputA.addEventListener("blur", function (e) {
            comp.props.handleRawEvents("blur", e);
        });
        this.switchBoxPillInputA.addEventListener("paste", function (e) {
            comp.props.handleRawEvents("paste", e);
        });
        this.switchBoxPillInputA.addEventListener("click", function (e) {
            comp.props.handleRawEvents("click", e);
        });
        this.switchBoxPillInputA.addEventListener("change", function (e) {
            comp.props.handleRawEvents("change", e);
        });
        
        this.switchBoxPillInputB.addEventListener("focus", function (e) {
            comp.props.handleRawEvents("focus", e);
        });
        this.switchBoxPillInputB.addEventListener("blur", function (e) {
            comp.props.handleRawEvents("blur", e);
        });
        this.switchBoxPillInputB.addEventListener("paste", function (e) {
            comp.props.handleRawEvents("paste", e);
        });
        this.switchBoxPillInputB.addEventListener("click", function (e) {
            comp.props.handleRawEvents("click", e);
        });
        this.switchBoxPillInputB.addEventListener("change", function (e) {
            comp.props.handleRawEvents("change", e);
        });
    }
    
  render() {
    return (
      <div className={style.switchBoxPill}>
        <div className={styleCDS.cds3_paragraph}>
          {this.props.config.label}
        </div>
        <input type="radio" id={this.props.config.optionA.id} name={this.props.config.name} value={this.props.config.optionA.value} ref={(input) => { this.switchBoxPillInputA = input; }} onChange={this.props.handleChange} required={this.props.config.required} disabled={this.props.config.disabled} readOnly={this.props.config.readonly} checked={this.props.config.checked} />
        <label htmlFor={this.props.config.optionA.id}>{this.props.config.optionA.label}</label>
        <input type="radio" id={this.props.config.optionB.id} name={this.props.config.name} value={this.props.config.optionB.value} ref={(input) => { this.switchBoxPillInputB = input; }} onChange={this.props.handleChange} required={this.props.config.required} disabled={this.props.config.disabled} readOnly={this.props.config.readonly} checked={this.props.config.checked} />
        <label htmlFor={this.props.config.optionB.id}>{this.props.config.optionB.label}</label>
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

export default SwitchBoxPill;