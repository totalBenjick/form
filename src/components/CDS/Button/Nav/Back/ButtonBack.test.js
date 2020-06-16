import ButtonBack from './ButtonBack.js';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';


describe("Render", function () {

    
    it("render", function () {

        const testRenderer = TestRenderer.create(
        <ButtonBack config={{label:"OK"}}></ButtonBack>
        );
        
        expect(testRenderer.toJSON()).toEqual(testRenderer.toJSON());

    });
});