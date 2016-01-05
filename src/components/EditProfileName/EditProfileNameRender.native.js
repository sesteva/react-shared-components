'use strict';

import React, {
  View,
  Text,
  TextInput,
  Component,
  StyleSheet,
  TouchableHighlight,
  PropTypes
} from 'react-native';

class EditProfileName extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { value, errors, sync, onValueChange, onValueSubmit } = this.props;
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
        <TouchableHighlight onPress={onValueSubmit} >
          <Text>Submit</Text>
        </TouchableHighlight>
        {errorNodes}
        {syncNode}
      </View>
    );
  }

}

EditProfileName.propTypes = {
  value: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  sync: PropTypes.bool.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onValueSubmit: PropTypes.func.isRequired
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
    borderWidth: 1
  },
  sync: {},
  error: {
    color: 'red',
  },
});

export default EditProfileName;
