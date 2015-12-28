import React, {
  Component,
  PropTypes
} from 'react';


import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import MainPage from './MainPage/MainPage.web';
import * as profileActions from '../actions/ProfileActions';


class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { profile, actions } = this.props;

    return (
      <div style={styles.container}>
        <MainPage profile={profile} actions={actions}/>
      </div>
    )
  }
}

App.propTypes = {
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

var styles = {
  container: {
  },
};
