'use strict';

import React, {
  Component,
  PropTypes
} from 'react';
import ReactDOM from 'react-dom';

import Render from './PreferencesRender.web';
import Logic from './PreferencesLogic';

let MyInnerComponent = Logic(React,Render);

class Preferences extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyInnerComponent {...this.props}/>
    );
  }

}

export default Preferences;
