import React, {
  PropTypes
} from 'react';

const ActiveTrips = ({ }) => {

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <span style={styles.h1}>Title</span>
      </div>
      <div style={styles.separator}/>
      <div style={styles.body}>
        <div style={styles.lineItem}>
          <span style={styles.text}>Some text</span>
          <span style={styles.action}>Some Action</span>
        </div>
        <div style={styles.separator}/>
      </div>
    </div>
  );
};

ActiveTrips.propTypes = {}

export default ActiveTrips;

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
    flexGrow: 13,
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
