import React from 'react';

const Render = ({ username, errors }) => {
  var errorNodes = errors.map((err, i) =>
    <p className="help-block" key={i}>{err}</p>
  );

  return (
    <div style={styles.wrapper}>
      <div style={styles.avatar}>
        <span>Avatar</span>
      </div>
      <div style={styles.username}>
        <span>{username}</span>
      </div>
      <div style={styles.misc}>
        <span>Something Else</span>
      </div>
      <div style={styles.msg}>
         {errorNodes}
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
