'use strict';

import React, {
  AppRegistry,
  Component
} from 'react-native';

import { Provider } from 'react-redux/native'
import configureStore from './stores/configureStore'
import App from './components/App.android.js';

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


class SampleApp extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('SampleApp', () => SampleApp);
