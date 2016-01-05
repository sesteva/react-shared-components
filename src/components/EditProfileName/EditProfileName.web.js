'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Render from './EditProfileNameRender.web';
import Logic from './EditProfileNameLogic';

let MyInnerComponent = Logic(React,Render);

export default class EditProfileName extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyInnerComponent {...this.props}/>
    );
  }

}
