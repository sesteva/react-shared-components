import React, {
  PropTypes
} from 'react';

import Input from '../EditProfileName/EditProfileName.web'

const UpdateProfile = ({ actions }) => {

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <span style={styles.h1}>Update Profile</span>
      </div>
      <div style={styles.separator}/>
      <div style={styles.body}>
        <div style={styles.lineItem}>
          <Input onSubmit={actions.updateProfile}/>
        </div>
      </div>
    </div>
  );
};

UpdateProfile.propTypes = {
  actions: PropTypes.object.isRequired
}

export default UpdateProfile;

var styles = {
  wrapper: {
   display: 'flex',
   flexGrow: 1,
   flexDirection: 'column',
   spanAlign: 'stretch',
   lineHeight: 4,
   margin: 0,
  },
  header: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    paddingTop: 10,
  },
  h1: {
    textAlign: 'center',
  },
  body: {
    flexGrow: 99,
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
