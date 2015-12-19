'use strict';

import React, {
  View,
  Component,
  StyleSheet
} from 'react-native';

import Render from './MainPageRender';
import Logic from './MainPageLogic';

let MyInnerComponent = Logic(React,Render());

export default class MainPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyInnerComponent />
    );
  }

}
