import React, { Component } from 'react';
import style from "../ButtonNav.scss";
import styles from "./ButtonNext.scss"

class ButtonNext extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        let isActive = !this.props.isButtonActive;
        let disableTextClass = isActive ? style.buttonActive : style.buttonNotActive;

        let dinamicAnchordClass = `${style.cds3ButtonNavNext} ${styles.ButtonNextContainer} ${disableTextClass}`;

        let classText = `${styles.buttonNextText} ${disableTextClass}`;
        let btnClass = `dfmxs dfmxs-canvas-arrow-right`;

        const buttonNext = () => {
            if (isActive === false) {
                return(
                    <img 
                    alt="solicitud de tarjetas online scotiabank" 
                    src={'https://scotiabankfiles.azureedge.net/scotia-bank-mexico/digital-factory/origination/assets/img/icons/gray-arrow-right.svg'}
                    />
                    )
                } else {  
                    return(
                        <i className={btnClass} aria-hidden="true"></i>
                    )                  
            }
        }
        return (
            <a href="#" id={this.props.config.id} className={dinamicAnchordClass} onClick={this.props.handleClick}>
              <span className={classText}> {this.props.config.label} </span> 
              {buttonNext()}
            </a>
        );
    }
    
}

export default ButtonNext;