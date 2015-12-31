'use strict';

import React from 'react'
import TestUtils from 'react-addons-test-utils'
const ActiveTrips = require.requireActual('../ActiveTripsLogic');

class Render extends React.Component {
    render() { return false; }
}

describe('ActiveTrips', function () {
  let Component;

  beforeEach(function(){
    Component = ActiveTrips(React,Render);
  })

  it('should create a component', function(){
    let instance = new Component({'a':1})
    expect(instance.props).toEqual({
      'a':1
    })
  })


});
