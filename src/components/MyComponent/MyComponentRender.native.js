'use strict';

import React, {
  View,
  Text,
  TextInput,
  Component,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class NativeRender extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { value, errors, sync, onValueChange, onSubmit } = this.props;
    var errorNodes = errors.map((e, i) =>
      <Text key={i} style={styles.error}>{e}</Text>);
    var syncNode = (value !== "") &&
      <Text style={styles.sync}>
        {sync ? "Synced!" : "Syncing..."}
      </Text>;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}>Name</Text>
        <TextInput value={value}
          ref="input"
          onChangeText={onValueChange}
          style={styles.input}/>
        <TouchableHighlight onPress={() => onSubmit(value)} >
          <Text>Submit</Text>
        </TouchableHighlight>
        {errorNodes}
        {syncNode}
      </View>
    );
  }

}

var styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 20,
    width: 320
  },
  label: {},
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1},
  sync: {},
  error: {
    color: 'red',
  },
});
