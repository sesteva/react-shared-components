'use strict';

import React, {
  View,
  Text,
  TextInput,
  Component,
  PropTypes,
  StyleSheet
} from 'react-native';

import Input from '../EditProfileName/EditProfileName.native'

class UpdateProfile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { actions } = this.props;

    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.h1}>Update Profile</Text>
        </View>
        <View style={styles.separator}/>
        <View style={styles.body}>
          <View style={styles.lineItem}>
            <Input onSubmit={actions.updateProfile}/>
          </View>
        </View>
      </View>
    );
  }

}

UpdateProfile.propTypes = {
  actions: PropTypes.object.isRequired
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
    flex: 13,
    backgroundColor: '#FAFAFA',
  },
  lineItem: {
    paddingTop: 25,
    flexDirection: 'row',
    alignItems: 'center'
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
  }
});

export default UpdateProfile;
