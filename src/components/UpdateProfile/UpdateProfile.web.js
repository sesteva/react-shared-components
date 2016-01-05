'use strict';

import React, {
  Component,
  PropTypes
} from 'react';
import ReactDOM from 'react-dom';

import Render from './UpdateProfileRender.web';
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
