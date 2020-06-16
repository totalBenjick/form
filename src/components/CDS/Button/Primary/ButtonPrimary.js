import React, { Component } from 'react';
import style from "./ButtonPrimary.scss"

class ButtonPrimary extends Component{
    
    
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <a href={this.props.config.href} 
              className={`${style.cds3ButtonPrimaryLink} ${((this.props.config.disabled) ? style.disabled : '')}` } 
              onClick={this.props.handleClick} 
               id={this.props.config.id}>
                {this.props.config.label}
            </a>
        );
    }
    
}

export default ButtonPrimary;