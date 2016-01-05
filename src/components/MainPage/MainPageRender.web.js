import React,{
  PropTypes
} from 'react';
import Profile from '../Profile/Profile.web';
import UpdateProfile from '../UpdateProfile/UpdateProfile.web'
import Preferences from '../Preferences/Preferences.web'
import ActiveTrips from '../ActiveTrips/ActiveTrips.web'

const MainPage = ({ profile, actions }) => {

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
          <UpdateProfile actions={actions}/>
        </div>
        <div style={styles.bottomRight}>
          <div style={styles.cellSix}>
            <Preferences />
          </div>
          <div style={styles.cellSeven} >
            <span style={styles.cellId}>7</span>
          </div>
        </div>
        <div style={styles.cellEight}>
          <span style={styles.cellId}>8</span>
        </div>
      </div>
    </div>
  );
};

MainPage.propTypes = {
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

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
    flexGrow: 2,
    display: 'flex',
    margin: 5
  },
  cellFive: {
    flexGrow: 2,
    display: 'flex',
    marginTop: 5,
    maringLeft:0,
    marginRight: 0
  },
  cellSix: {
    flexGrow: 2,
  },
  cellSeven: {
    flexGrow: 3,
    backgroundColor: '#FF0000',
    marginRight: 5,
    marginLeft: 5
  },
  cellEight: {
    flexGrow: 3,
    backgroundColor: '#FFFF00',
    marginTop: 5,
    marginRight: 5
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

export default MainPage;
