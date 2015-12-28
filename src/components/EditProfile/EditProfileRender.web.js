import React from 'react';

const Render = ({ value, errors, sync, onValueChange, onValueSubmit }) => {

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

  return (<div style={styles.container}>
    <div>Update Profile</div>
    <label>Name : </label>
    <input type="text"
      className="form-control"
      value={value}
      onChange={e => onValueChange(e.target.value)} />
    <button onClick={onValueSubmit} >
        <span>Submit</span>
    </button>
    {syncBlock}
  </div>);
};

export default Render;

var styles = {
  container:{    
    flexGrow: 1,
    backgroundColor: '#fff',
    margin: 5,
  }
}
