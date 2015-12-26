'use strict';

import React, {
  View,
  Component,
  StyleSheet
} from 'react-native';

import Render from './EditProfileRender';
import Logic from './EditProfileLogic';

let MyInnerComponent = Logic(React,Render);

export default class EditProfile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <MyInnerComponent {...this.props}/>
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
