'use strict';

import React, {
  Component
} from 'react-native';

import Render from './ProfileRender';
import Logic from './ProfileLogic';

let MyInnerComponent = Logic(React,Render());

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
