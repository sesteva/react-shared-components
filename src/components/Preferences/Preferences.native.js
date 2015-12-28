'use strict';

import React, {
  Component,
  PropTypes
} from 'react-native';

import Render from './PreferencesRender';
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
