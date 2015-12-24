'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Render from './EditProfileRender.web';
import Logic from './EditProfileLogic';

let MyInnerComponent = Logic(React,Render);

export default class EditProfile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyInnerComponent {...this.props}/>
    );
  }

}
