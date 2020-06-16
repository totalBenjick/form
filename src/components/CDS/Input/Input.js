import React, { Component } from 'react';


import TextBox from './../TextBox/TextBox.js';
import SelectBox from './../SelectBox/SelectBox.js';
import SwitchBoxPill from './../SwitchBoxPill/SwitchBoxPill.js';
import CheckBox from './../CheckBox/CheckBox.js';
import RadioButton from './../RadioButton/RadioButton.js';




class Input extends Component{
   
    render(){
        let inputElement = null;
        switch ( this.props.elementType ) {
            case "TextBox":
                inputElement = <TextBox handleOver={this.props.handleOver} config = {this.props.config} handleRawEvents = {this.props.config.handleRawEvents} handleChange = {this.props.config.handleChange}></TextBox>;
                break;
            case "SelectBox":
                inputElement = <SelectBox config = {this.props.config} handleRawEvents = {this.props.config.handleRawEvents} handleChange = {this.props.config.handleChange}></SelectBox>;
                break;
            case "SwitchBoxPill":
                inputElement = <SwitchBoxPill config = {this.props.config} handleRawEvents = {this.props.config.handleRawEvents} handleChange = {this.props.config.handleChange}></SwitchBoxPill>;
                break;
            case "CheckBox":
                inputElement = <CheckBox config = {this.props.config} handleRawEvents = {this.props.config.handleRawEvents} handleChange = {this.props.config.handleChange}></CheckBox>;
                break;
            case "RadioButton":
                inputElement = <RadioButton config = {this.props.config} 
                                            handleRawEvents = {this.props.config.handleRawEvents} 
                                            handleChange = {this.props.config.handleChange}
                                            isInline={false}
                                            >
                                </RadioButton>;
                break;
            case "RadioButton_Mexican":
                inputElement = <RadioButton config = {this.props.config} 
                                            handleRawEvents = {this.props.config.handleRawEvents} 
                                            handleChange = {this.props.config.handleChange}
                                            isInline = {false}
                                            />
                break;
            default:
                inputElement = <div>{/*Default input empty blank div element*/}</div>;
            break;
    }

    return (
        <div>
            { inputElement }
        </div>
    );

    }
    
}

export default Input;