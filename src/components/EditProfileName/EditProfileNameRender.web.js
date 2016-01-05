import React, {
  PropTypes
} from 'react';

const EditProfileName = ({ value, errors, sync, onValueChange, onValueSubmit }) => {

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

  return (
    <div style={styles.container}>
      <label style={styles.label}>Name</label>
      <div >
        <input type="text"  id="name" value={value} style={styles.input} placeholder=" Enter your name"
          onChange={e => onValueChange(e.target.value)} />
      </div>
      <button onClick={onValueSubmit} style={styles.button}>
          <span>Submit</span>
      </button>
      <div>
        <span style={styles.label}>{syncBlock}</span>
      </div>
    </div>
  );
};

EditProfileName.propTypes = {
  value: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  sync: PropTypes.bool.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onValueSubmit: PropTypes.func.isRequired
}

export default EditProfileName;

var styles = {
  container:{
    lineHeight: '30px',
    margin: 5,
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%'
  },
  label:{
    display: 'block',
    width: '20%'
  },
  input: {

  }
}
