import React, { Component } from 'react';
import style from "./ButtonSecondary.scss"

class ButtonSecondary extends Component{
    
    
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <a href={this.props.config.href} id={this.props.config.id} className={style.cds3ButtonSecondaryLink} onClick={this.props.handleClick}>
                {this.props.config.label}
            </a>
        );
    }
    
}

export default ButtonSecondary;