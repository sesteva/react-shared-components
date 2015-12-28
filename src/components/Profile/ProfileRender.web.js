import React, {
  PropTypes
} from 'react';

const Profile = ({ profile }) => {

  return (
    <div style={styles.wrapper}>
      <div style={styles.avatar}>
        <span>Avatar</span>
      </div>
      <div style={styles.username}>
        <span>{profile.username}</span>
      </div>
      <div style={styles.misc}>
        <span>Errors</span>
        <span>{profile.error}</span>
      </div>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired
}

export default Profile;

var styles = {
  wrapper: {
   backgroundColor: '#fff',
   display: 'flex',
   flexGrow: 1,
   flexDirection: 'row',
   textAlign: 'center',
   lineHeight: 4,
  },
  avatar: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  username:{
    flexGrow: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  misc: {
    flexGrow: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  msg: {
    flexGrow: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
  },
};
