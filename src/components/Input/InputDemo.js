import React, {Component} from 'react';
import Input from '../CDS/Input/Input';


export class InputDemo extends Component {
    constructor(props){
        super(props);
        let configTelefonoCelular=  {
            id: "personal_telefonoCelular",
            type: "tel",
            label: "Teléfono celular",
            placeholder:"10 dígitos",
            required: true,
            disabled: false,
            readonly: false,
        
            masking: true,
            mask: "(99) 9999-9999",
            maskChar: " ",
            alwaysShowMask: false,
            defaultValue: '55 5555 5555',
            validationStatus: null,
            
            handleRawEvents: handleRawEventsTelefonoCelular,
            handleChange: handleChangeTelefonoCelular
        };
        
        this.calle = {
            id: "personal_nombre",
            type: "text",
            label: "Calle",
            placeholder:  "",
            required: true,
            maxlength: 26,
            dataType: "alphabeticBlankSpaces",        
            masking: false,
            alwaysShowMask: false,
            
            handleRawEvents: handleRawEventsPrimerNombre,
            handleChange: handleChangePrimerNombre
        };
        this.numero = {
            id: "personal_nombre",
            type: "text",
            label: "Número",
            placeholder:  "",
            required: true,
            maxlength: 26,
            dataType: "alphabeticBlankSpaces",        
            masking: false,
            alwaysShowMask: false,
            
            handleRawEvents: handleRawEventsPrimerNombre,
            handleChange: handleChangePrimerNombre
        };
        this.cp = {
            id: "personal_nombre",
            type: "text",
            label: "Código Postal",
            placeholder:  "",
            required: true,
            maxlength: 26,
            dataType: "alphabeticBlankSpaces",        
            masking: false,
            alwaysShowMask: false,
            
            handleRawEvents: handleRawEventsPrimerNombre,
            handleChange: handleChangePrimerNombre
        };
        this.referencias = {
            id: "personal_nombre",
            type: "text",
            label: "Referencias",
            placeholder:  "",
            required: true,
            maxlength: 26,
            dataType: "alphabeticBlankSpaces",        
            masking: false,
            alwaysShowMask: false,
            
            handleRawEvents: handleRawEventsPrimerNombre,
            handleChange: handleChangePrimerNombre
        };
        
        let thisTelefonoCelular;
        let cellphone;
        
        let thisPrimerNombre;
        
        function handleRawEventsPrimerNombre(event, e, oldValue) {
        
            if (event === "blur") {
        
                thisPrimerNombre = e.target.value;
        
            }
        }
        function handleChangePrimerNombre(event) {
            thisPrimerNombre = event.target.value;
        }
        
        function handleRawEventsTelefonoCelular(event, e, oldValue) {
        
            if (event === "blur") {
                thisTelefonoCelular = e.target.value;
            }
        }
        
        function handleChangeTelefonoCelular(event) {
            const cursorPosition = event.target.selectionStart;
            cellphone = event.target.value;
            cellphone.replace(/[^0-9\\.]+/g, '');
            event.target.setSelectionRange(cursorPosition, cursorPosition);
            thisTelefonoCelular = cellphone;
        }
    }
    

    render() {
        return(
         <div className="mt4">
			<Input config={this.calle}  elementType="TextBox"/>
			<Input config={this.numero}  elementType="TextBox"/>
			<Input config={this.cp}  elementType="TextBox"/>
			<Input config={this.referencias}  elementType="TextBox"/>
         </div>
        )
    }
}

export default  InputDemo;
