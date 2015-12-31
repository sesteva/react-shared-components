'use strict';

import React from 'react'
import TestUtils from 'react-addons-test-utils'
const Profile = require.requireActual('../ProfileLogic');

class Render extends React.Component {
    render() { return false; }
}

describe('Profile', function () {
  let Component, instance;

  beforeEach(function(){
    Component = Profile(React,Render);
    instance = new Component({
      'loadProfile': ()=> {
          return {'name':'santiago'}
      }
    })
    spyOn(instance.props, 'loadProfile')
  })

  it('should load the profile when component did mount', ()=> {
    instance.componentDidMount()
    expect(instance.props.loadProfile).toHaveBeenCalled()
  })


});
