import React, { Component } from 'react';
import styleCDS from "../CDS.scss";
import style from "./InputPin.scss";
import TextBox from './../TextBox/TextBox.js'

const KEY_CODES = {
    BACKSP_KEY: 8,
    TAB_KEY: 9,
    // number keys
    NUM_KEY_ZERO: 48,
    NUM_KEY_ONE: 49,
    NUM_KEY_TWO: 50,
    NUM_KEY_THREE: 51,
    NUM_KEY_FOUR: 52,
    NUM_KEY_FIVE: 53,
    NUM_KEY_SIX: 54,
    NUM_KEY_SEVEN: 55,
    NUM_KEY_EIGHT: 56,
    NUM_KEY_NINE: 57,
    // keypad number keys
    PAD_KEY_ZERO: 96,
    PAD_KEY_ONE: 97,
    PAD_KEY_TWO: 98,
    PAD_KEY_THREE: 99,
    PAD_KEY_FOUR: 100,
    PAD_KEY_FIVE: 101,
    PAD_KEY_SIX: 102,
    PAD_KEY_SEVEN: 103,
    PAD_KEY_EIGHT: 104,
    PAD_KEY_NINE: 105,
    // arrow keys
    ARROW_LEFT: 37,
    ARROW_RIGHT: 39
}

const KEY_VALUE_CODE = {
    [KEY_CODES.NUM_KEY_ZERO]: '0',
    [KEY_CODES.PAD_KEY_ZERO]: '0',
    [KEY_CODES.NUM_KEY_ONE]: '1',
    [KEY_CODES.PAD_KEY_ONE]: '1',
    [KEY_CODES.NUM_KEY_TWO]: '2',
    [KEY_CODES.PAD_KEY_TWO]: '2',
    [KEY_CODES.NUM_KEY_THREE]: '3',
    [KEY_CODES.PAD_KEY_THREE]: '3',
    [KEY_CODES.NUM_KEY_FOUR]: '4',
    [KEY_CODES.PAD_KEY_FOUR]: '4',
    [KEY_CODES.NUM_KEY_FIVE]: '5',
    [KEY_CODES.PAD_KEY_FIVE]: '5',
    [KEY_CODES.NUM_KEY_SIX]: '6',
    [KEY_CODES.PAD_KEY_SIX]: '6',
    [KEY_CODES.NUM_KEY_SEVEN]: '7',
    [KEY_CODES.PAD_KEY_SEVEN]: '7',
    [KEY_CODES.NUM_KEY_EIGHT]: '8',
    [KEY_CODES.PAD_KEY_EIGHT]: '8',
    [KEY_CODES.NUM_KEY_NINE]: '9',
    [KEY_CODES.PAD_KEY_NINE]: '9'
}

class InputPin extends Component {
    constructor(props) {
        super(props);

        const length = this.props.config.length || 6
        const pinInputs = {};
        const pinInputId = this.props.config.id+'_input';
        for(let i = 1; i <= length; i++){
            pinInputs[pinInputId+i] = {
                id: pinInputId+"_"+i,
                type: "tel",
                label: "",
                placeholder:"",
                required: true,
                disabled: this.props.config.disabled || false,
                readonly: false,
                maxlength: 1,
                masking: false,
                mask: "",
                maskChar: " ",
                alwaysShowMask: false,
                defaultValue: '',
                validationStatus: null,
                handleRawEvents: this.handleRawEventsInputPinDigits,
                handleChange: this.handleChangeInputPinDigits
            }
        }

        const arrayValue = new Array(length).fill(' ');
        
        this.state = {
            pinInputId,
            length,
            ...pinInputs,
            arrayValue,
            value: ''
        }

        this.handleChange = this.props.config.handleChange;
        this.handleChange = this.handleChange.bind(this);

        this.handleRawEventsInputPinDigits = this.handleRawEventsInputPinDigits.bind(this);
        this.handleChangeInputPinDigits = this.handleChangeInputPinDigits.bind(this);
    }

    handleRawEventsInputPinDigits(eventName, event){
        switch(eventName){
            case 'keydown':
                this.handleKeyDownInputPin(event);
            break;
            case 'focus':
                this.handleFocusInputPin(event);
            break;
            default:
                return false;    
            
        }
    }

    isValidKey(event){
        return Object.values(KEY_CODES).indexOf(event.keyCode) !== -1;
    }

    isValidValue(event){
        if(Object.keys(KEY_VALUE_CODE).indexOf(event.keyCode+'') !== -1){
            return (KEY_VALUE_CODE[event.keyCode] === event.key)
        }
        return true;
    }

    handleKeyDownInputPin(event){
        const currentPin = this.getTargetIndex(event);
        if(!this.isValidKey(event)){
            event.preventDefault();
            return false;
        }
        
        if(!this.isValidValue(event)){
            event.preventDefault();
            return false;
        }

        if(event.keyCode === KEY_CODES.BACKSP_KEY || event.keyCode === KEY_CODES.ARROW_LEFT){
            const nextPin = currentPin - 1;
            if(currentPin > 1 ){
                setTimeout(() => {
                    document.getElementById(this.state.pinInputId+'_'+nextPin).focus();
                }, 10);
            }
            return true;
        } 

        if(currentPin < this.state.length && (event.keyCode !== 9)){
            const nextPin = currentPin + 1;
            setTimeout(() => {
                document.getElementById(this.state.pinInputId+'_'+nextPin).focus();
            }, 10);
        }
    } 

    handleFocusInputPin(event){
        event.target.setSelectionRange(0, 1);
    }

    handleChangeInputPinDigits(event, b, c){
        event.target.value = event.target.value.replace(/[^0-9]+/g, "");
        const currentPin = this.getTargetIndex(event);
        let {arrayValue, value} = this.state;
        arrayValue[currentPin-1] = event.target.value;
        value = arrayValue.join('');
        this.setState({
            value,
            arrayValue
        });
        this.handleChange(value);
    }

    getTargetIndex(event){
        return parseInt( event.target.id.replace(this.state.pinInputId+'_', ''), 10)
    }


    render(){
        return (
            <div className={style.inputPinContainer}>
                <label className={style.filled} htmlFor={this.props.config.id}>{this.props.config.label}</label>
                <div className={style.inputPinDigitsContainer}>
                    {
                        new Array(this.state.length).fill('').map((val, index) => {
                            return <div  key={`input${index+1}`} className={((this.state.length % 2 === 0) && (index+1 === this.state.length/2)) ?  style.inputPinDigitMiddle  : style.inputPinDigit}> 
                                <TextBox
                                    config={ 
                                        {
                                            ...this.state[`${this.state.pinInputId}${index+1}`],
                                            disabled: this.props.config.disabled
                                        }
                                    }  
                                    handleRawEvents = {this.handleRawEventsInputPinDigits} 
                                    handleChange = {this.handleChangeInputPinDigits} />
                            </div>
                        })
                    }
                </div>
                {this.props.config.validationStatus === 3 &&
                <div className={styleCDS.success}><i className=" dfmxs dfmxs-canvas-success icon-check-success "></i></div>
                }
                {this.props.config.validationStatus === 2 && this.props.config.validationText.error &&
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

export default InputPin;