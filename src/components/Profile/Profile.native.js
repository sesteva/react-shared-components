'use strict';

import React, {
  Component,
  PropTypes
} from 'react-native';

import Render from './ProfileRender';
import Logic from './ProfileLogic';

let MyInnerComponent = Logic(React,Render);

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyInnerComponent {...this.props}/>
    );
  }

}

export default Profile;
