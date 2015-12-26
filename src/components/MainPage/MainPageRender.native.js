'use strict';

import React, {
  View,
  Text,
  TextInput,
  Component,
  StyleSheet
} from 'react-native';

import Dimensions from 'Dimensions'
import Profile from '../Profile/Profile.native'
import Input from '../EditProfile/EditProfile.native'

let { width } = Dimensions.get('window')

export default class NativeRender extends Component {

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
            <Text style={styles.cellId}>4</Text>
          </View>
          <View style={[styles.cellFive, styles.base]}>
            <Text>Update Profile</Text>
            <Text> Window width: {width} </Text>
            <Input onSubmit={actions.updateProfile}/>
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
            <Text style={styles.cellId}>4</Text>
          </View>
          <View style={[styles.cellFive, styles.base]}>
            <Text>Update Profile</Text>
            <Text> Window width: {width} </Text>
            <Input onSubmit={actions.updateProfile}/>
          </View>
          <View style={styles.bottomRight}>
            <View style={[styles.cellSix, styles.base]}>
              <Text style={styles.cellId}>6</Text>
            </View>
            <View style={[styles.cellSeven, styles.base]} >
              <Text style={styles.cellId}>7</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }


  render() {
    const { profile, actions } = this.props;
    let responsiveView
    if(width > 600) {
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
    borderColor: '#000000',
    borderWidth: 5,
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
    flex: 2
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
    flex: 6
  },
  cellSix: {
    flex: 1
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
