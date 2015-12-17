'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Render from './MyComponentRender.web';
import Logic from './MyComponentLogic';

let MyInnerComponent = Logic(React,Render);

export default class MyComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyInnerComponent />
    );
  }

}
