'use strict';

import React, {
  View,
  Text,
  TextInput,
  Component,
  StyleSheet
} from 'react-native';

export default class NativeRender extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { username, errors } = this.props;
    var errorNodes = errors.map((e, i) =>
      <Text key={i} style={styles.error}>{e}</Text>);

    return (
      <View style={styles.wrapper}>
        <View style={styles.avatar}>
          <Text>Avatar</Text>
        </View>
        <View style={styles.username}>
          <Text>{username}</Text>
        </View>
        <View style={styles.misc}>
          <Text>Something Else</Text>
        </View>
        <View style={styles.msg}>
           {errorNodes}
        </View>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  wrapper: {
   flex: 1,
   flexDirection: 'row'
  },
  avatar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
  },
  username:{
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
  },
  misc: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
  },
  msg: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
  },
  error: {
    color: 'red',
  },
});
