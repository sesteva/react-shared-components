import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from './components/MainPage/MainPage.web';


let app = document.getElementById('app')

class SampleApp extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="container">
        <MainPage />
      </div>
    )
  }
}

ReactDOM.render(<SampleApp />, app);
