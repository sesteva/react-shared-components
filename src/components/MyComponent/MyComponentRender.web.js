import React from 'react';

var NameViewWeb = ({ value, errors, sync, onValueChange }) => {
  var errorNodes = errors.map((err, i) =>
    <p className="help-block" key={i}>{err}</p>
  );

  var status = "form-group"
  if (errorNodes.length > 0) status += " has-error";

  var syncBlock = value != "" &&
    (<p className="help-block"
      style={{color: "#737373"}}>
      {sync ? "Synced!" : "Syncing..."}
    </p>);

  var wrapperStyle = {
    width: 750,
    padding: 250,
    border: '1px solid black'
  };

  return (<div className={status} style={wrapperStyle}>
    <label>Name : </label>
    <input type="text"
      className="form-control"
      value={value}
      onChange={e => onValueChange(e.target.value)} />
    {errorNodes}
    {syncBlock}
  </div>);
};

export default NameViewWeb;
