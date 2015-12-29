'use strict';

import React, {
  Component,
  PropTypes
} from 'react-native';

import Render from './ActiveTripsRender';
import Logic from './ActiveTripsLogic';

let MyInnerComponent = Logic(React,Render);

class ActiveTrips extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyInnerComponent {...this.props}/>
    );
  }

}

export default ActiveTrips;
