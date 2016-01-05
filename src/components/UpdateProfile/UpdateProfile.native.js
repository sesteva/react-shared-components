'use strict';

import React, {
  Component,
  PropTypes
} from 'react-native';

import Render from './UpdateProfileRender';
import Logic from './UpdateProfileLogic';

let MyInnerComponent = Logic(React,Render);

class UpdateProfile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyInnerComponent {...this.props}/>
    );
  }

}

export default UpdateProfile;
