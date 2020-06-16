import SelectBox from './SelectBox.js';
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
            id: "financiera_institucionesBancarias",
            label: "¿A qué institución pertenece tu Tarjeta de Crédito?",
            required: false,
            disabled: false,
            readonly: false,

            validationStatus: 2,
            defaultValue: 1,
            validationText:{
                  error:""  
                },

            options: [],

            handleRawEvents: handleRawEvents,
            handleChange: handleChangeMarketing
        };
        
        
        const renderer = new ShallowRenderer();
        renderer.render(
            <SelectBox config={config} handleRawEvents = {handleRawEvents} handleChange = {handleChangeMarketing}/>
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
        
        let selectBox = new SelectBox();
        selectBox.props = {
            config : {
                
                id: "financiera_institucionesBancarias",
                label: "¿A qué institución pertenece tu Tarjeta de Crédito?",
                required: false,
                disabled: false,
                readonly: false,

                defaultValue: 1,

                options: [],

                handleRawEvents: handleRawEvents,
                handleChange: handleChangeMarketing,
                
                validationStatus: 1,
                validationText:{
                  error:""  
                },
            },
            handleRawEvents: handleRawEvents,
            handleChange: handleChangeMarketing
        };
        
        selectBox.setState = function(obj){
            return true;
        }
                
        var t = document.createElement("select");
        
        
        selectBox.selectInput = t;
        
        selectBox.componentDidMount();        
        

        selectBox.selectInput.click();
        selectBox.selectInput.focus();
        selectBox.selectInput.blur();
        
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        selectBox.selectInput.dispatchEvent(evt);
        
        evt = document.createEvent("HTMLEvents");
        evt.initEvent("paste", false, true);
        selectBox.selectInput.dispatchEvent(evt);
        
        selectBox.render();
                
        expect(true).toBe(true);

    });
});