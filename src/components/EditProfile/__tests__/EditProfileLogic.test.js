'use strict';

import React from 'react'
import TestUtils from 'react-addons-test-utils'
const EditProfile = require.requireActual('../EditProfileLogic');

class Render extends React.Component {
    render() { return false; }
}

describe('EditProfile', function () {
  let Component;

  beforeEach(function(){
    Component = EditProfile(React,Render);
  })

  it('should create a component with default state', function(){
    let instance = new Component()
    let initialState = { value: "", errors: [], sync: true }
    expect(instance.state).toEqual(initialState)
  })

  describe('validation', ()=> {

    it('should add validation if name contains @', () => {
      let instance = new Component()
      let validations = instance.validate('S@a')
      expect(validations[0]).toBe("Your name contains '@'? Really?")
    })

    it('should add validation if name contains is too long', () => {
      let instance = new Component()
      let validations = instance.validate('Saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      expect(validations[0]).toBe('Your name is too long!')
    })

  })






});
