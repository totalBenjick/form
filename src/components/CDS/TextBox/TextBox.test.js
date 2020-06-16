import TextBox from './TextBox.js';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';


describe("Render", function () {

    
    it("render", function () {
        
        function handleRawEvents(){
            return true;
        }
        function handleChangeMarketing(){
            return true;
        }
        var config = {
                id: "empleo_nombreEmpresa",
                type: "text",
                label: "¿En dónde trabajas?",
                placeholder:"Nombre de tu empresa",
                required: true,
                disabled: false,
                readonly: false,

                masking: true,
                mask: "(99) 9999 - 9999",
                maskChar: "_",
                alwaysShowMask: false,
                defaultValue: "",
                validationStatus: null,
                validationText:{
                  error:""  
                },

            handleRawEvents: handleRawEvents,
            handleChange: handleChangeMarketing
        };
        
        
        const renderer = new ShallowRenderer();
        renderer.render(
            <TextBox config={config} handleRawEvents = {handleRawEvents} handleChange = {handleChangeMarketing}/>
        );
        const result = renderer.getRenderOutput();
        
        expect(result).toBe(result);

    });
    
    it("render", function () {
        
        function handleRawEvents(){
            return true;
        }
        function handleChangeMarketing(){
            return true;
        }
        var config = {
                id: "empleo_nombreEmpresa",
                type: "text",
                label: "¿En dónde trabajas?",
                placeholder:"Nombre de tu empresa",
                required: true,
                disabled: false,
                readonly: false,

                masking: false,
                mask: "(99) 9999 - 9999",
                maskChar: "_",
                alwaysShowMask: false,
                defaultValue: "",
                validationStatus: 1,
                validationText:{
                  error:""  
                },

            handleRawEvents: handleRawEvents,
            handleChange: handleChangeMarketing
        };
        
        
        const renderer = new ShallowRenderer();
        renderer.render(
            <TextBox config={config} handleRawEvents = {handleRawEvents} handleChange = {handleChangeMarketing}/>
        );
        const result = renderer.getRenderOutput();
        
        expect(result).toBe(result);

    });
    
    it("render", function () {
        
        function handleRawEvents(){
            return true;
        }
        function handleChangeMarketing(){
            return true;
        }
        var config = {
                id: "empleo_nombreEmpresa",
                type: "text",
                label: "¿En dónde trabajas?",
                placeholder:"Nombre de tu empresa",
                required: true,
                disabled: false,
                readonly: false,

                masking: false,
                mask: "(99) 9999 - 9999",
                maskChar: "_",
                alwaysShowMask: false,
                defaultValue: "",
                validationStatus: 2,
                validationText:{
                  error:""  
                },

            handleRawEvents: handleRawEvents,
            handleChange: handleChangeMarketing
        };
        
        
        const renderer = new ShallowRenderer();
        renderer.render(
            <TextBox config={config} handleRawEvents = {handleRawEvents} handleChange = {handleChangeMarketing}/>
        );
        const result = renderer.getRenderOutput();
        
        expect(result).toBe(result);

    });
    
    it("render", function () {
        
        function handleRawEvents(){
            return true;
        }
        function handleChangeMarketing(){
            return true;
        }
        var config = {
                id: "empleo_nombreEmpresa",
                type: "text",
                label: "¿En dónde trabajas?",
                placeholder:"Nombre de tu empresa",
                required: true,
                disabled: false,
                readonly: false,

                masking: false,
                mask: "(99) 9999 - 9999",
                maskChar: "_",
                alwaysShowMask: false,
                defaultValue: "",
                validationStatus: 3,
                validationText:{
                  error:""  
                },

            handleRawEvents: handleRawEvents,
            handleChange: handleChangeMarketing
        };
        
        
        const renderer = new ShallowRenderer();
        renderer.render(
            <TextBox config={config} handleRawEvents = {handleRawEvents} handleChange = {handleChangeMarketing}/>
        );
        const result = renderer.getRenderOutput();
        
        expect(result).toBe(result);

    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    it("render manual", function () {
        
        function handleRawEvents(){
            return true;
        }
        function handleChangeMarketing(){
            return true;
        }
        
        let textBox = new TextBox();
        textBox.props = {
            config : {
                
                name: "titularTarjeta",
                label: <span>¿Eres titular de alguna Tarjeta de credito bancaria o departamental?<br />La vigencia mínima dede ser de 3 meses</span>,
                required: false,
                disabled: false,
                readonly: false,

                validationStatus: 1,
                
                optionA: {
                    id: "financiera_titularTarjeta_true",
                    value: true,
                    label: "Sí"
                },
                optionB: {
                    id: "financiera_titularTarjeta_false",
                    value: false,
                    label: "No"
                },
                
                validationStatus: 1,
                validationText:{
                  error:""  
                }
            },
            handleRawEvents: handleRawEvents,
            handleChange: handleChangeMarketing,
            handleOver:handleRawEvents
        };
        
        textBox.setState = function(obj){
            return true;
        }
        
        textBox.state.displayInfoInteractiveText = true;
                
        var t = document.createElement("input");
        
        
        var e = {
            preventDefault: function(){
                return true;
            }
        };
        
        textBox.textInput = t;
        
        textBox.componentDidMount();
        
        textBox.toggleInteractiveText(e);
        
        textBox.state.displayInfoInteractiveText = false;
        
        textBox.toggleInteractiveText(e);
        
        
        
        textBox.textInput = t;
        
        
        
              
        
        
        textBox.componentDidMount();  
        
        
        

        textBox.textInput.click();
        textBox.textInput.focus();
        textBox.textInput.blur();
        
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        textBox.textInput.dispatchEvent(evt);
        
        evt = document.createEvent("HTMLEvents");
        evt.initEvent("paste", false, true);
        textBox.textInput.dispatchEvent(evt);
        
        evt = document.createEvent("HTMLEvents");
        evt.initEvent("input", false, true);
        textBox.textInput.dispatchEvent(evt);
        
        evt = document.createEvent("HTMLEvents");
        evt.initEvent("keyup", false, true);
        textBox.textInput.dispatchEvent(evt);
        
        evt = document.createEvent("HTMLEvents");
        evt.initEvent("keydown", false, true);
        textBox.textInput.dispatchEvent(evt);
        
        
        
        
        textBox.componentDidMount();  
        
        textBox.render();
                
        expect(true).toBe(true);

    });
});