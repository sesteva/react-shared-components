'use strict';

import React, {
  View,
  Component,
  StyleSheet
} from 'react-native';

import NativeRender from './MyComponentRender';
import Logic from './MyComponentLogic';

let Base = Logic(React);
let Render = new NativeRender();

export default class MyComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Base view={Render} />
      </View>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
