'use strict';

import React, {
  View,
  Text,
  TextInput,
  Component,
  StyleSheet,
  PropTypes
} from 'react-native';

import Dimensions from 'Dimensions'
import Profile from '../Profile/Profile.native'
import UpdateProfile from '../UpdateProfile/UpdateProfile.native'
import Preferences from '../Preferences/Preferences.native'
import ActiveTrips from '../ActiveTrips/ActiveTrips.native'

let { width } = Dimensions.get('window')

class MainPage extends Component {

  constructor(props) {
    super(props);
  }

  renderSmartPhoneView(profile, actions){
    return (
      <View style={styles.parent}>
        <View style={styles.topBlock}>
          <Profile profile={profile} loadProfile={actions.loadProfile}/>
        </View>
        <View style={styles.bottomBlock}>
          <View style={[styles.cellFour, styles.base]}>
            <ActiveTrips />
          </View>
          <View style={[styles.cellFive, styles.base]}>
            <UpdateProfile actions={actions}/>
          </View>
        </View>
      </View>
    )
  }

  renderTabletView(profile, actions) {
    return (
      <View style={styles.parent}>
        <View style={styles.topBlock}>
          <Profile profile={profile} loadProfile={actions.loadProfile}/>
        </View>
        <View style={styles.bottomBlock}>
          <View style={[styles.cellFour, styles.base]}>
            <ActiveTrips />
          </View>
          <View style={[styles.cellFive, styles.base]}>
            <UpdateProfile actions={actions}/>
          </View>
          <View style={styles.bottomRight}>
            <View style={[styles.cellSix, styles.base]}>
              <Preferences />
            </View>
            <View style={[styles.cellSeven, styles.base]} >
              <Text style={styles.cellId}>Debug Info:</Text>
              <Text> Window width: {width} </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }


  render() {
    const { profile, actions } = this.props;
    let responsiveView
    if(width > 800) {
      responsiveView = this.renderTabletView(profile, actions)
    } else {
      responsiveView = this.renderSmartPhoneView(profile, actions)
    }

    return (
      <View style={styles.parent}>
        {responsiveView}
      </View>
    );
  }

}

MainPage.propTypes = {
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

var styles = StyleSheet.create({
  parent: {
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  base: {
    borderColor: '#009688',
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBlock: {
    flexDirection: 'row',
    flex: 1
  },
  leftCol: {
    flex: 2
  },
  bottomBlock: {
    flex: 8,
    flexDirection: 'row'
  },
  bottomRight: {
    flexDirection: 'column',
    flex: 3
  },
  cellOne: {
    flex: 1,
    borderBottomWidth: 15
  },
  cellTwo: {
    flex: 3
  },
  cellThree: {
    backgroundColor: '#FF0000',
    flex: 5
  },
  cellFour: {
    flex: 3,
    backgroundColor: '#0000FF'
  },
  cellFive: {
    flex: 5
  },
  cellSix: {
    flex: 1,
  },
  cellSeven: {
    flex: 1,
    backgroundColor: '#FFFF00'
  },
  cellId: {
    textAlign: 'center',
    fontSize: 24,
  }
});

export default MainPage;
