import React from 'react';
import Profile from '../Profile/Profile.web';
import Input from '../EditProfile/EditProfile.web';
import Preferences from '../Preferences/Preferences.web'
import ActiveTrips from '../ActiveTrips/ActiveTrips.web'

const Render = ({ profile, actions }) => {

  return (
    <div style={styles.parent}>
      <div style={styles.topBlock}>
        <Profile profile={profile} loadProfile={actions.loadProfile}/>
      </div>
      <div style={styles.bottomBlock}>
        <div style={styles.cellFour}>
          <ActiveTrips />
        </div>
        <div style={styles.cellFive}>
          <Input onSubmit={actions.updateProfile}/>
        </div>
        <div style={styles.bottomRight}>
          <div style={styles.cellSix}>
            <Preferences />
          </div>
          <div style={styles.cellSeven} >
            <span style={styles.cellId}>7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

let styles = {
  parent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topBlock: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1
  },
  leftCol: {
    flexGrow: 2
  },
  bottomBlock: {
    display: 'flex',
    flexGrow: 8,
    flexDirection: 'row',
    textAlign: 'center',
  },
  bottomRight: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 2
  },
  cellOne: {
    flexGrow: 1,
    borderBottomWidth: 15
  },
  cellTwo: {
    flexGrow: 3
  },
  cellThree: {
    backgroundColor: '#FF0000',
    flexGrow: 5
  },
  cellFour: {
    flexGrow: 3,
    display: 'flex',
    margin: 5
  },
  cellFive: {
    flexGrow: 6,
    display: 'flex'
  },
  cellSix: {
    flexGrow: 2,
  },
  cellSeven: {
    flexGrow: 3,
    backgroundColor: '#FFFF00',
    margin: 5
  },
  cellId: {
    textAlign: 'center',
    fontSize: 24,
    padding: 5,
    width: 200,
    marginTop: 10,
    lineHeight: 10,
  }
};

export default Render;
