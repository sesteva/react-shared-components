import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './stores/configureStore'
import App from './components/App.web';

function getInitialState() {
  // const _initState = {
  //   auth: new authInitialState,
  //   device: (new deviceInitialState).set('isMobile',true).set('version',VERSION),
  //   global: (new globalInitialState),
  //   profile: new profileInitialState
  // };
  const _initState = {}
  return _initState;
}

const store = configureStore(getInitialState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
