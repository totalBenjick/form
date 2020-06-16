import React, { Component } from 'react';
import style from "../ButtonNav.scss"

class ButtonBack extends Component{
    
    
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <a href="#" id={this.props.config.id} className={style.cds3ButtonNavBack} onClick={this.props.handleClick}>
            <i className="dfmxs dfmxs-canvas-arrow-left" aria-hidden="true"></i>
            {this.props.config.label}
            </a>
        );
    }
    
}

export default ButtonBack;