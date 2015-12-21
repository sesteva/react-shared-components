import React from 'react';
import Profile from '../Profile/Profile.web';


const Render = ({ props }) => {

  return (
    <div style={styles.parent}>
      <div style={styles.topBlock}>
        <Profile />
      </div>
      <div style={styles.bottomBlock}>
        <div style={styles.cellFour}>
          <span style={styles.cellId}>4</span>
        </div>
        <div style={styles.cellFive}>
          <span style={styles.cellId}>5</span>
        </div>
        <div style={styles.bottomRight}>
          <div style={styles.cellSix}>
            <span style={styles.cellId}>6</span>
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
    backgroundColor: '#0000FF',
  },
  cellFive: {
    flexGrow: 6
  },
  cellSix: {
    flexGrow: 1,
  },
  cellSeven: {
    flexGrow: 1,
    backgroundColor: '#FFFF00'
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
