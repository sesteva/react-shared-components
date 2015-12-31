'use strict';

import React from 'react'
import TestUtils from 'react-addons-test-utils'
const Preferences = require.requireActual('../PreferencesLogic');

class Render extends React.Component {
    render() { return false; }
}

describe('Preferences', function () {
  let Component;

  beforeEach(function(){
    Component = Preferences(React,Render);
  })

  it('should create a component', function(){
    let instance = new Component({'a':1})
    expect(instance.props).toEqual({
      'a':1
    })
  })


});
