'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import WebRender from './MyComponentRender.web';
import Logic from './MyComponentLogic';

let Base = Logic(React);
// let Render = new WebRender();

export default class MyComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Base view={WebRender} />
    );
  }

}
