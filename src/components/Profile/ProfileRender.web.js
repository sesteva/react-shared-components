import React from 'react';

const Render = ({ profile }) => {

  return (
    <div style={styles.wrapper}>
      <div style={styles.avatar}>
        <span>Avatar</span>
      </div>
      <div style={styles.username}>
        <span>{profile.username}</span>
      </div>
      <div style={styles.misc}>
        <span>Something Else</span>
      </div>      
    </div>
  );
};

export default Render;

var styles = {
  wrapper: {
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
