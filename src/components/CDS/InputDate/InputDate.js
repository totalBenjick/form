import React, { Component } from 'react';
import styleCDS from "../CDS.scss"
import style from "./InputDate.scss"
import TextBox from './../TextBox/TextBox.js'
import { Row, Col } from 'react-bootstrap';
import keyboardFilters from '../../../utils/KeyboardFilters';
import validation from '../../../utils/Validation';

class InputDate extends Component {

    _timeoutID;
    constructor(props) {
        super(props);
        
        this.state = {
            day: '',
            month: '',
            year: '',
            value: '',
            isManagingFocus: false,
            configDay: {
                id: this.props.config.id+"Dia",
                type: "tel",
                label: "Día",
                placeholder: "dd",
                required: true,
                disabled: false,
                readonly: false,

                masking: false,
                maxlength:2,
                mask: "99",
                maskChar: " ",
                alwaysShowMask: false,
                defaultValue: "",
                validationStatus: null
            },
            configMonth: {
                id: this.props.config.id+"Mes",
                type: "tel",
                label: "Mes",
                placeholder: "mm",
                required: true,
                disabled: false,
                readonly: false,

                masking: false,
                maxlength:2,
                mask: "99",
                maskChar: " ",
                alwaysShowMask: false,
                defaultValue: "",
                validationStatus: null
            },
            configYear: {
                id: this.props.config.id+"Anio",
                type: "tel",
                label: "Año",
                placeholder: "aaaa",
                required: true,
                disabled: false,
                readonly: false,

                masking: false,
                maxlength:4,
                mask: "9999",
                maskChar: " ",
                alwaysShowMask: false,
                defaultValue: "",
                validationStatus: null
            },
        }

        this.handleChange = this.props.config.handleChange;
        this.handleChange = this.handleChange.bind(this);
        this.handleRawEvents = this.props.config.handleRawEvents;
        this.handleRawEvents = this.handleRawEvents.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this.formatFullDate = this.formatFullDate.bind(this);
        this.handleEventsFullDate = this.handleEventsFullDate.bind(this);
        this.getField = this.getField.bind(this);
        this.handleRawEventsField = this.handleRawEventsField.bind(this);
        this.handleChangeField = this.handleChangeField.bind(this);

    }

    componentDidMount(){
        const {defaultValue} = this.props.config;
        if(defaultValue && validation.isDateValid(defaultValue)){
            const dateParts = defaultValue.split('/');
            document.getElementById(this.state.configDay.id).value = dateParts[0];
            document.getElementById(this.state.configMonth.id).value = dateParts[1];
            document.getElementById(this.state.configYear.id).value = dateParts[2];

            this.setState({
                day: dateParts[0],
                month: dateParts[1],
                year: dateParts[2],
                value: defaultValue
            });
        }
    }

    _onBlur() {
        this._timeoutID = setTimeout(() => {
            if (this.state.isManagingFocus) {
                this.setState({
                    isManagingFocus: false,
                });
                const fecha = this.formatFullDate();
                this.handleChange(fecha);
                this.handleRawEvents('blur', fecha);
            }
        }, 0);
    }
      
    _onFocus() {
        clearTimeout(this._timeoutID);
        if (!this.state.isManagingFocus) {
            this.setState({
                isManagingFocus: true,
            });
        }
    }

    formatFullDate(){
        const {day, month, year} = this.state;
        return `${day}/${month}/${year}`;
    }


    handleEventsFullDate(){
        const fecha = this.formatFullDate();
        if(/\d{2}\/\d{2}\/\d{4}/.test(fecha)){
            this.handleChange(fecha);
            this.handleRawEvents('blur', fecha)
        }
    }
    
    handleRawEventsField(event, e){
        if (event === "blur") {
            const field= this.getField(e);
            if(field !== 'year'){
                keyboardFilters.singleDigitDate(e);
            }
            this.setState({
                [field]: e.target.value
            }, () => {
                const fullDate = this.formatFullDate();
                this.setState({value: fullDate})
                this.handleEventsFullDate();
            });
        }
    }

    getField({target}){
        const fieldsPlaceholders = {"dd": "day","mm": "month","aaaa": 'year'};
        return fieldsPlaceholders[target.placeholder];
    }

    handleChangeField(event) {
        keyboardFilters.limitToNumber(event);
        this.setState({
            [this.getField(event)]: event.target.value
        }, () => {
            const fecha = this.formatFullDate();
            this.setState({value: fecha})
            this.handleEventsFullDate();
        })
    }

    render(){
        return (
            <div className={style.inputDateContainer}  onBlur={this._onBlur} onFocus={this._onFocus}>
                <label className={style.filled} htmlFor={this.props.config.id}>{this.props.config.label}</label>
                <div >
                <Row>
                    <Col xs={4} className={style.inputDateField}>
                        <TextBox 
                            config={{
                                ...this.state.configDay, 
                                validationStatus:(this.props.config.validationStatus === 3 ? 3 : null)
                            }} 
                            handleRawEvents={this.handleRawEventsField}
                            handleChange={this.handleChangeField}  
                        ></TextBox>
                    </Col>
                    <Col xs={4} className={style.inputDateField}>
                    <TextBox 
                            config={{
                                ...this.state.configMonth, 
                                validationStatus:(this.props.config.validationStatus === 3 ? 3 : null)
                            }} 
                            handleRawEvents={this.handleRawEventsField}
                            handleChange={this.handleChangeField}  
                        ></TextBox>
                    </Col>
                    <Col xs={4} className={style.inputDateField}>
                        <TextBox 
                            config={{
                                ...this.state.configYear,
                                validationStatus:(this.props.config.validationStatus === 3 ? 3 : null)
                            }} 
                            handleRawEvents={this.handleRawEventsField} 
                            handleChange={this.handleChangeField} 
                        ></TextBox>
                    </Col>
                </Row>
                </div>
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

export default InputDate;
