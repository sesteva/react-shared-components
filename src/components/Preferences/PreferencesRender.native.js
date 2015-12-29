'use strict';

import React, {
  View,
  Text,
  TextInput,
  Component,
  PropTypes,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'


class Preferences extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { Preferences } = this.props;

    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.h1}>Personal Preferences</Text>
        </View>
        <View style={styles.separator}/>
        <View style={styles.body}>
          <View style={styles.lineItem}>
            <Icon name="th-large" size={15} color="#FAF" style={styles.icon}/>
            <Text style={styles.text}>Window Seat</Text>
            <Text style={styles.action}>Add</Text>
          </View>
          <View style={styles.separator}/>
          <View style={styles.lineItem}>
            <Icon name="wifi" size={15} color="#FAF" style={styles.icon}/>
            <Text style={styles.text}>In-Flight WiFi</Text>
            <Text style={styles.action}>Add</Text>
          </View>
          <View style={styles.separator}/>
          <View style={styles.lineItem}>
            <Icon name="spoon" size={15} color="#FAF" style={styles.icon}/>
            <Text style={styles.text}>Meals and Snacks</Text>
            <Text style={styles.action}>Add</Text>
          </View>
          <View style={styles.separator}/>
          <View style={styles.lineItem}>
            <Icon name="youtube-play" size={15} color="#FAF" style={styles.icon}/>
            <Text style={styles.text}>In-Flight Movie</Text>
            <Text style={styles.action}>Add</Text>
          </View>
          <View style={styles.separator}/>
          <View style={styles.lineItem}>
            <Icon name="diamond" size={15} color="#FAF" style={styles.icon}/>
            <Text style={styles.text}>Lounge Access</Text>
            <Text style={styles.action}>Add</Text>
          </View>
          <View style={styles.separator}/>
        </View>
      </View>
    );
  }

}

Preferences.propTypes = {

}

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
    textAlign: 'center',
  },
  body: {
    flex: 7,
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

export default Preferences;
