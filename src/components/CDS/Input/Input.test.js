import Input from './Input.js';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';


describe("Render", function () {

    function handleRawEvents(){
        return true;
    }
    function handleChangeMarketing(){
        return true;
    }
    function handleOver(){
        return true;
    }
    
    it("render default", function () {

        const testRenderer = TestRenderer.create(
        <Input></Input>
        );
        
        expect(testRenderer.toJSON()).toEqual(testRenderer.toJSON());

    });
    
    it("render TextBox", function () {
        
        var params ={ 
            props:{
                config : {

                    name: "titularTarjeta",
                    label: <span>¿Eres titular de alguna Tarjeta de credito bancaria o departamental?<br />La vigencia mínima dede ser de 3 meses</span>,
                    required: false,
                    disabled: false,
                    readonly: false,

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

                    validationStatus: 2,
                    validationText:{
                      error:""  
                    },
                    handleRawEvents: handleRawEvents,
                    handleChange: handleChangeMarketing,
                    handleOver:handleOver
                },
                elementType:"TextBox"
            }
        };

        let input = new Input();
        input.props = params.props;
        
         let r = input.render();
        
        expect(r).toEqual(r);

    });
    
    it("render SelectBox", function () {

        var params ={ 
            props:{
                config : {

                    id: "financiera_institucionesBancarias",
                    label: "¿A qué institución pertenece tu Tarjeta de Crédito?",
                    required: false,
                    disabled: false,
                    readonly: false,

                    defaultValue: 1,

                    options: [],

                    validationStatus: 2,
                    validationText:{
                      error:""  
                    },
                    handleRawEvents: handleRawEvents,
                    handleChange: handleChangeMarketing,
                },
                elementType:"SelectBox"
            }
        };

        let input = new Input();
        input.props = params.props;
        
         let r = input.render();
        
        expect(r).toEqual(r);

    });
    
    it("render SwitchBoxPill", function () {

        var params ={ 
            props:{
                config : {

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
                    handleChange: handleChangeMarketing,
                },
                elementType:"SwitchBoxPill"
            }
        };

        let input = new Input();
        input.props = params.props;
        
         let r = input.render();
        
        expect(r).toEqual(r);

    });
    
    it("render CheckBox", function () {

        var params ={ 
            props:{
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
                elementType:"CheckBox"
            }
        };

        let input = new Input();
        input.props = params.props;
        
         let r = input.render();
        
        expect(r).toEqual(r);

    });
});