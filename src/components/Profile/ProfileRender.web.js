import React from 'react';

const Render = ({ username, errors }) => {
  var errorNodes = errors.map((err, i) =>
    <p className="help-block" key={i}>{err}</p>
  );

  return (
    <div>
      <label>{username}</label>
      {errorNodes}
    </div>
  );
};

export default Render;
