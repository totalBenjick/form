import InputPin from './InputPin.js';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';

describe("Render", function () {

    it("render default", function () {
        const testRenderer = TestRenderer.create(<InputPin></InputPin>);        
        expect(testRenderer.toJSON()).toEqual(testRenderer.toJSON());
    });

    it("renders InputPin", () => {
        var config = {
            id: "pin",
            type: "tel",
            label: "Código",
            placeholder:"",
            required: true,
            disabled: false,
            readonly: false,
            length: 6,
            masking: true,
            mask: "(99) 9999-9999",
            maskChar: " ",
            key: 1,
            alwaysShowMask: false,
            defaultValue: '',
            validationStatus: null,
            handleChange: () => {

            }
        }
        let input = new InputPin();
        input.props = config;
        let r = input.render();
        expect(r).toEqual(r);
    });

});

describe('Valid keys', () => {
    
    var config = {
        id: "pin",
        type: "tel",
        label: "Código",
        placeholder:"",
        required: true,
        disabled: false,
        readonly: false,
        length: 6,
        masking: true,
        mask: "(99) 9999-9999",
        maskChar: " ",
        key: 1,
        alwaysShowMask: false,
        defaultValue: '',
        validationStatus: null,
        handleChange: () => {

        }
    }
    it("valid key", () => {
        let input = new InputPin({config});
        const result = input.isValidKey({
            keyCode: 48 // '0' on keyboard
        });
        expect(result).toEqual(true);
    });    

    it("invalid key", () => {
        let input = new InputPin({config});
        const result = input.isValidKey({
            keyCode: 64 // '@'
        });
        expect(result).toEqual(false);
    });

    it("valid value", () => {
        let input = new InputPin({config});
        const result = input.isValidValue({
            key: '3',
            keyCode: 51 // '0' on keyboard
        });
        expect(result).toEqual(true);
        
    });

    it("invalid value", () => {
        let input = new InputPin({config});
        const result = input.isValidValue({
            key: '#',
            keyCode: 51 
        });
        expect(result).toEqual(false);

        const result2 = input.isValidValue({
            key: "A",
            keyCode: 65
        });
        expect(result2).toEqual(false);
        
    });
});

describe('Input events', () => {
    
    var config = {
        id: "pin",
        type: "tel",
        label: "Código",
        placeholder:"",
        required: true,
        disabled: false,
        readonly: false,
        length: 6,
        masking: true,
        mask: "(99) 9999-9999",
        maskChar: " ",
        key: 1,
        alwaysShowMask: false,
        defaultValue: '',
        validationStatus: null,
        handleChange: () => {

        }
    }

    it('handles raw events', () => {
        let input = new InputPin({config});
        const handleKeyDown = spyOn(input, 'handleKeyDownInputPin');
        const handlFocus = spyOn(input, 'handleFocusInputPin');
        input.handleRawEventsInputPinDigits('focus', {});
        expect(handlFocus).toHaveBeenCalled();
        input.handleRawEventsInputPinDigits('keydown', {});
        expect(handleKeyDown).toHaveBeenCalled();
        const res = input.handleRawEventsInputPinDigits('blur', {});
        expect(res).toEqual(false);
    });

    
    it('handles keydown', () =>{
        let input = new InputPin({config});
        const result1 = input.handleKeyDownInputPin({
            key: '#',
            keyCode: 51,
            target:{
                id: 'pin_input_1'
            },
            preventDefault: () => {}
        });
        expect(result1).toEqual(false); 
        const result2 = input.handleKeyDownInputPin({
            key: "A",
            keyCode: 65,
            target:{
                id: 'pin_input_1'
            },
            preventDefault: () => {}
        });
        expect(result2).toEqual(false); 
        const result3 = input.handleKeyDownInputPin({
            key: "Backspace",
            keyCode: 8,
            target:{
                id: 'pin_input_1'
            },
            preventDefault: () => {}
        });
        expect(result3).toEqual(true); 

        const result4 = input.handleKeyDownInputPin({
            key: '#',
            keyCode: 51,
            target:{
                id: 'pin_input_1'
            },
            preventDefault: () => {}
        });

        expect(result4).toEqual(true); 

        /*
        const getElement1 = spyOn(document, 'getElementById');
        input.handleKeyDownInputPin({
            key: '3',
            keyCode: 51,
            target:{
                id: 'pin_input_1'
            },
            preventDefault: () => {}
        });

        expect(getElement1).toHaveBeenCalledWith('pin_input_2');
*/
        
    });
    
});