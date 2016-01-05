'use strict';

import React from 'react'
import TestUtils from 'react-addons-test-utils'
const UpdateProfile = require.requireActual('../UpdateProfileLogic');

class Render extends React.Component {
    render() { return false; }
}

'use strict';

describe('UpdateProfile', function () {
  let Component, instance;

  beforeEach(function(){
    Component = UpdateProfile(React,Render);
  })

  it('should create a component', function(){
    instance = new Component({'a':1})
    expect(instance.props).toEqual({
      'a':1
    })
  })


});
