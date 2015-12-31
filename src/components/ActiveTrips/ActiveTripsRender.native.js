'use strict';

import React, {
  View,
  Text,
  TextInput,
  Component,
  PropTypes,
  StyleSheet
} from 'react-native';

class ActiveTrips extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.h1}>Active Trips</Text>
        </View>
        <View style={styles.separator}/>
        <View style={styles.body}>
          <View style={styles.lineItem}>
            <Text style={styles.text}>Some Text</Text>
            <Text style={styles.action}>Action</Text>
          </View>
          <View style={styles.separator}/>
        </View>
      </View>
    );
  }

}

ActiveTrips.propTypes = {}

var styles = StyleSheet.create({
  wrapper: {
   flex: 1,
   flexDirection: 'column',
   alignSelf: 'stretch',
  },
  header: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: 10,
  },
  h1: {
    textAlign: 'center'
  },
  body: {
    flex: 13,
    backgroundColor: '#FAFAFA',
  },
  lineItem: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  },
  icon: {
    flex: 1,
    textAlign: 'center',
  },
  text: {
    flex: 4
  },
  action: {
    flex: 1,
    color: '#009688',
    fontSize: 11,
  },
  separator: {
    backgroundColor: '#e9ebeb',
    height: 1
  },
});

export default ActiveTrips;
