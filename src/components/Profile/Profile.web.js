'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Render from './ProfileRender.web';
import Logic from './ProfileLogic';

let MyInnerComponent = Logic(React,Render);

export default class Profile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyInnerComponent />
    );
  }

}
