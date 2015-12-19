import React from 'react';
import ReactDOM from 'react-dom';

import SampleComponent from './components/MyComponent/MyComponent.web';
import Profile from './components/Profile/Profile.web';

let app = document.getElementById('app')

class SampleApp extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="container">
        <Profile/>
        <SampleComponent/>
      </div>
    )
  }
}

ReactDOM.render(<SampleApp />, app);
