'use strict';

import React, {
  Component,
  PropTypes
} from 'react';
import ReactDOM from 'react-dom';

import Render from './ProfileRender.web';
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

Profile.propTypes = {
  profile: PropTypes.object.isRequired
}

export default Profile;
