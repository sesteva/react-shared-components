'use strict';

import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';

import Render from './MainPageRender.web';
import Logic from './MainPageLogic';

let MyInnerComponent = Logic(React,Render);

class MainPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyInnerComponent {...this.props}/>
    );
  }

}

export default MainPage;
