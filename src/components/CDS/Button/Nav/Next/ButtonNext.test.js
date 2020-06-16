import ButtonNext from './ButtonNext.js';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';


describe("Render", function () {

    
    it("render", function () {

        const testRenderer = TestRenderer.create(
        <ButtonNext config={{label:"OK"}}></ButtonNext>
        );
        
        expect(testRenderer.toJSON()).toEqual(testRenderer.toJSON());

    });
});