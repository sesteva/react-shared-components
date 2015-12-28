import React, {
  PropTypes
} from 'react';

const Preferences = ({ Preferences }) => {

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <span style={styles.h1}>Personal Preferences</span>
      </div>
      <div style={styles.separator}/>
      <div style={styles.body}>
        <div style={styles.lineItem}>
          <span style={styles.icon}>Icon</span>
          <span style={styles.text}>Window Seat</span>
          <span style={styles.action}>Add</span>
        </div>
        <div style={styles.separator}/>
        <div style={styles.lineItem}>
          <span style={styles.icon}>Icon</span>
          <span style={styles.text}>In-Flight WiFi</span>
          <span style={styles.action}>Add</span>
        </div>
        <div style={styles.separator}/>
        <div style={styles.lineItem}>
          <span style={styles.icon}>Icon</span>
          <span style={styles.text}>Meals and Snacks</span>
          <span style={styles.action}>Add</span>
        </div>
        <div style={styles.separator}/>
        <div style={styles.lineItem}>
          <span style={styles.icon}>Icon</span>
          <span style={styles.text}>In-Flight Movie</span>
          <span style={styles.action}>Add</span>
        </div>
        <div style={styles.separator}/>
        <div style={styles.lineItem}>
          <span style={styles.icon}>Icon</span>
          <span style={styles.text}>Lounge Access</span>
          <span style={styles.action}>Add</span>
        </div>
        <div style={styles.separator}/>
      </div>
    </div>
  );
};

Preferences.propTypes = {
}

export default Preferences;

var styles = {
  wrapper: {
   display: 'flex',
   flexGrow: 1,
   flexDirection: 'column',
   spanAlign: 'stretch',
   lineHeight: 4,
   margin: 5,
  },
  header: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: 10,
  },
  h1: {
    textAlign: 'center',
  },
  body: {
    flexGrow: 7,
    backgroundColor: '#FAFAFA',
  },
  lineItem: {
    padding: 5,
    flexDirection: 'row',
    display: 'flex'
  },
  icon: {
    flexGrow: 1,
  },
  text: {
    flexGrow: 4,
    textAlign: 'left'
  },
  action: {
    flexGrow: 1,
    color: '#009688',
    fontSize: 11
  },
  separator: {
    backgroundColor: '#e9ebeb',
    height: 1
  },

};
