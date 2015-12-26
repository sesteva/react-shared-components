'use strict';

import React, {
  View,
  Text,
  TextInput,
  Component,
  PropTypes,
  StyleSheet
} from 'react-native';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { profile } = this.props;

    return (
      <View style={styles.wrapper}>
        <View style={styles.avatar}>
          <Text>Avatar</Text>
        </View>
        <View style={styles.username}>
          <Text>{profile.username}</Text>
        </View>
        <View style={styles.misc}>
          <Text>Errors</Text>
          <Text>{profile.error}</Text>
        </View>
      </View>
    );
  }

}

Profile.propTypes = {
  profile: PropTypes.object.isRequired
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

export default Profile;
