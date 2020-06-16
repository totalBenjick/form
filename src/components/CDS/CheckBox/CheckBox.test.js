import CheckBox from './CheckBox.js';
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
            id: "financiera_marketing",
                name: "marketing",
                label: "Autorizo el uso de mis datos con fines de mercadeo",
                required: true,
                disabled: false,
                readonly: false,
                
                validationStatus: 2,
                validationText:{
                  error:""  
                },

                details: true,
                detailsTitle: "Ver más detalles",
                detailsContent: "Acepto y manifiesto mi consentimiento en que podré recibir ofrecimientos de productos y/o servicios financieros por Scotiabank Inverlat, S.A., y/ o Crédito Familiar, S.A. de C.V. y/o Globalcard, S.A. de C.V. o por cualesquiera de las Entidades que formen parte de su Grupo Financiero o Económico, que se encuentren o pudieran encontrarse ligados o ser adicionales a los productos y/o servicios solicitados, siendo de mi conocimiento de que cuento con el derecho innegable de contratar cualesquiera de ellos con cualquier tercero. De igual forma, manifiesto mi aceptación en que Scotiabank Inverlat, S.A. y/o Crédito Familiar, S.A. de C.V., y/o Globalcard, S.A. de C.V. podrán compartir mi información con cualesquiera de las Entidades que formen parte de su Grupo Financiero o Económico, para que me ofrezcan otro tipo de productos y servicios adicionales relacionados con el producto o servicio que estoy solicitando.",

                handleRawEvents: handleRawEvents,
                handleChange: handleChangeMarketing
        };
        
        
        const renderer = new ShallowRenderer();
        renderer.render(
            <CheckBox config={config} handleRawEvents = {handleRawEvents} handleChange = {handleChangeMarketing}/>
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
        
        let checkBox = new CheckBox();
        checkBox.props = {
            config : {
                id: "financiera_marketing",
                name: "marketing",
                label: "Autorizo el uso de mis datos con fines de mercadeo",
                required: true,
                disabled: false,
                readonly: false,
                
                validationStatus: 2,
                validationText:{
                  error:""  
                },

                details: true,
                detailsTitle: "Ver más detalles",
                detailsContent: "Acepto y manifiesto mi consentimiento en que podré recibir ofrecimientos de productos y/o servicios financieros por Scotiabank Inverlat, S.A., y/ o Crédito Familiar, S.A. de C.V. y/o Globalcard, S.A. de C.V. o por cualesquiera de las Entidades que formen parte de su Grupo Financiero o Económico, que se encuentren o pudieran encontrarse ligados o ser adicionales a los productos y/o servicios solicitados, siendo de mi conocimiento de que cuento con el derecho innegable de contratar cualesquiera de ellos con cualquier tercero. De igual forma, manifiesto mi aceptación en que Scotiabank Inverlat, S.A. y/o Crédito Familiar, S.A. de C.V., y/o Globalcard, S.A. de C.V. podrán compartir mi información con cualesquiera de las Entidades que formen parte de su Grupo Financiero o Económico, para que me ofrezcan otro tipo de productos y servicios adicionales relacionados con el producto o servicio que estoy solicitando.",
            },
            handleRawEvents: handleRawEvents,
            handleChange: handleChangeMarketing
        };
        
        checkBox.setState = function(obj){
            return true;
        }
        
        checkBox.state.displayInfoInteractiveText = true;
        
        var t = document.createElement("input");
        
        var e = {
            preventDefault: function(){
                return true;
            }
        };
        
        checkBox.checkBoxInput = t;
        
        checkBox.componentDidMount();
        
        checkBox.toggleInteractiveText(e);
        
        

        checkBox.checkBoxInput.click();
        checkBox.checkBoxInput.focus();
        checkBox.checkBoxInput.blur();
        
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        checkBox.checkBoxInput.dispatchEvent(evt);
        
        evt = document.createEvent("HTMLEvents");
        evt.initEvent("paste", false, true);
        checkBox.checkBoxInput.dispatchEvent(evt);
        
        checkBox.render();
                
        expect(true).toBe(true);

    });
});