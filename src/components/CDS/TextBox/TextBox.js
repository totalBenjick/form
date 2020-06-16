import React, { Component } from 'react';
import styleCDS from "../CDS.scss";
import style from './index.module.sass';

import InputMask from 'react-input-mask';

class TextBox extends Component {


  constructor(props) {
    super(props);
    // [null -> Clean, 0 -> Info, 1 -> InfoInteractive, 2 -> Error , 3 -> Success]  
    this.state = {
      displayInfoInteractiveText: false,
      oldValue: null
    };
  }

  componentDidMount() {
    // Attach events to the input raw DOM element
    let comp = this;
    this.textInput.addEventListener("keydown", function (e) {
      comp.setState(
        {
          ...this.sate,
          oldValue: e.target.value
        });
      comp.props.handleRawEvents("keydown", e);
    });
    this.textInput.addEventListener("keyup", function (e) {
      comp.props.handleRawEvents("keyup", e);
    });
    this.textInput.addEventListener("keypress", function (e) {
      comp.props.handleRawEvents("keypress", e);
    });
    this.textInput.addEventListener("input", function (e) {
      comp.props.handleRawEvents("input", e, comp.state.oldValue);
    });
    this.textInput.addEventListener("focus", (e) => {
      if (this.props.handleOver && this.props.handleOver !== undefined) {
        this.props.handleOver();
      }
      comp.props.handleRawEvents("focus", e);
    });
    this.textInput.addEventListener("blur", function (e) {
      comp.props.handleRawEvents("blur", e);
    });
    this.textInput.addEventListener("paste", function (e) {
      comp.props.handleRawEvents("paste", e);
    });
    this.textInput.addEventListener("click", function (e) {
      comp.props.handleRawEvents("click", e);
    });
    this.textInput.addEventListener("change", function (e) {
      comp.props.handleRawEvents("change", e);
    });
  }

  toggleInteractiveText() {
    if (this.state.displayInfoInteractiveText) {
      this.setState({ displayInfoInteractiveText: false });
    } else {
      this.setState({ displayInfoInteractiveText: true });
    }

  }

  render() {
    let consoleIt = () => {
      console.log(style);
    };
    consoleIt();
    let filled = false;
    
    let stylesSuccess = [style.textBoxContainer, style.success].join(' ');
    let validationStyle = this.props.config.validationStatus===3 ? stylesSuccess : style.textBoxContainer;

    if (document.getElementById(this.props.config.id) !== null) {
      if (document.getElementById(this.props.config.id).value !== "") {
        filled = true;
      }
    }

    return (
      <div className={`${validationStyle}`} >

    <label className={'f1'} htmlFor={this.props.config.id}>{this.props.config.label} {this.props.config.secondaryLabel && <span className={style.secondaryLabel}>{this.props.config.secondaryLabel}</span>}</label>
        {this.props.config.masking === false &&
          <input type={this.props.config.type} id={this.props.config.id}
            className={style.inputFont}
            ref={(input) => { this.textInput = input; }} 
            onChange={this.props.handleChange} 
            required={this.props.config.required} 
            disabled={this.props.config.disabled} 
            readOnly={this.props.config.readonly} 
            placeholder={this.props.config.placeholder}
            maxLength={this.props.config.maxlength}
            value={this.props.config.value === undefined ? null : this.props.config.value}
            dataType={this.props.config.dataType} />
        }
        {this.props.config.masking === true &&
          <InputMask key={this.props.config.key || this.props.config.id} 
          type={this.props.config.type}
          id={this.props.config.id} 
          mask={this.props.config.mask} 
          maskChar={this.props.config.maskChar} 
          inputRef={(input) => { this.textInput = input; }} 
          onChange={this.props.handleChange} 
          defaultValue={this.props.config.defaultValue} 
          required={this.props.config.required} 
          disabled={this.props.config.disabled} 
          readOnly={this.props.config.readonly} 
          placeholder={this.props.config.placeholder} />
        }
        <span className={style.bar}></span>
        



        {this.props.config.validationStatus === 3 &&
          <div className={styleCDS.success}><i className=" dfmxs dfmxs-canvas-success icon-check-success "></i></div>
        }
        {this.props.config.validationStatus === 2 &&
          <div className={styleCDS.error}><i className="dfmxs dfmxs-canvas-error"></i>{this.props.config.validationText.error}</div>
        }
        {this.props.config.validationStatus === 0 &&
          <div className={styleCDS.infoInteractive}>
            <div className={styleCDS.infoStep1}><i className="dfmxs dfmxs-canvas-info" onClick={() => this.toggleInteractiveText()}></i></div>
            {this.state.displayInfoInteractiveText === true &&
              <div className={styleCDS.info}>{this.props.config.validationText.info}</div>
            }
          </div>
        }
        {this.props.config.validationStatus === 1 &&
          <div className={styleCDS.info}><i className="dfmxs dfmxs-canvas-info  "></i>{this.props.config.validationText.info}</div>
        }
      </div>
    );
  }

}

export default TextBox;