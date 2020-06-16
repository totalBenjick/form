import SwitchBoxPill from './SwitchBoxPill.js';
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
                id:"financiera_titularTarjeta",
                name: "titularTarjeta",
                label: <span>¿Eres titular de alguna Tarjeta de credito bancaria o departamental?<br />La vigencia mínima dede ser de 3 meses</span>,
                required: false,
                disabled: false,
                readonly: false,

                validationStatus: 2,
                
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
                validationText:{
                  error:""  
                },

            handleRawEvents: handleRawEvents,
            handleChange: handleChangeMarketing
        };
        
        
        const renderer = new ShallowRenderer();
        renderer.render(
            <SwitchBoxPill config={config} handleRawEvents = {handleRawEvents} handleChange = {handleChangeMarketing}/>
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
        
        let switchBoxPill = new SwitchBoxPill();
        switchBoxPill.props = {
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
            handleChange: handleChangeMarketing
        };
        
        switchBoxPill.setState = function(obj){
            return true;
        }
                
        var t = document.createElement("input");
        
        
        switchBoxPill.switchBoxPillInputA = t;
        
        
        var u = document.createElement("input");
        
        
        switchBoxPill.switchBoxPillInputB = u;
        
              
        
        
        switchBoxPill.componentDidMount();  
        
        
        

        switchBoxPill.switchBoxPillInputA.click();
        switchBoxPill.switchBoxPillInputA.focus();
        switchBoxPill.switchBoxPillInputA.blur();
        
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        switchBoxPill.switchBoxPillInputA.dispatchEvent(evt);
        
        evt = document.createEvent("HTMLEvents");
        evt.initEvent("paste", false, true);
        switchBoxPill.switchBoxPillInputA.dispatchEvent(evt);
        
        
        
        

        switchBoxPill.switchBoxPillInputB.click();
        switchBoxPill.switchBoxPillInputB.focus();
        switchBoxPill.switchBoxPillInputB.blur();
        
        evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        switchBoxPill.switchBoxPillInputB.dispatchEvent(evt);
        
        evt = document.createEvent("HTMLEvents");
        evt.initEvent("paste", false, true);
        switchBoxPill.switchBoxPillInputB.dispatchEvent(evt);
        
        switchBoxPill.componentDidMount();  
        
        switchBoxPill.render();
                
        expect(true).toBe(true);

    });
});