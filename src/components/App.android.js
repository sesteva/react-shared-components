'use strict';

import React, {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  Navigator,
  View,
  PropTypes,
  BackAndroid
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux/native';
import ToolbarAndroid from 'ToolbarAndroid';
import Dimensions from 'Dimensions'
import MainPage from './MainPage/MainPage.native';
import * as profileActions from '../actions/ProfileActions';
import Preferences from './Preferences/Preferences.native'

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1) {
    return false;
  }
  _navigator.pop();
  return true;
});

let { width } = Dimensions.get('window')
let _navigator = null;

class App extends Component {

  constructor(props){
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  openDrawer() {
    this.refs['DRAWER'].openDrawer()
  }

  goToPage(route) {
    this.refs['NAVIGATOR'].push(route);
  }

  onActionSelected(position) {
    if (position === 0) return this.openDrawer();
    if (position === 1) return this.goToPage({name:'home'});
    if (position === 2) return this.goToPage({name:'preferences'});
  }

  renderScene(route, navigator) {
    _navigator = navigator;

    const { profile, actions } = this.props;

    switch (route.name) {
    case 'home':
      return <MainPage profile={profile} actions={actions}/>;
    case 'preferences':
      return <View style={styles.modal}><Preferences/></View>
    default:
      console.error('Encountered unexpected route: ' + route.name);
    }
    return <MainPage />;
  }

  navigationMenu() {
    let menu = [
      {title: 'Menu', show: 'never'},
      {title: 'Home', show: 'never'}
    ]
    if(width < 800) {
      menu.push({title: 'Preferences', show: 'never'})
      return menu
    }
    return menu
  }

  render() {
    const { profile, actions } = this.props;

    let navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
      </View>
    )

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={'DRAWER'}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
          <View style={styles.container}>
            <ToolbarAndroid
              title="Logo"
              titleColor="white"
              style={styles.toolbar}
              onActionSelected={this.onActionSelected}
              actions={this.navigationMenu()}/>
            <Navigator
             ref={'NAVIGATOR'}
             initialRoute={{name: 'home'}}
             renderScene={this.renderScene}/>
          </View>
    </DrawerLayoutAndroid>
    );
  }
};

var styles = StyleSheet.create({
  modal: {
    margin: 80
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#FAFAFA'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    height: 56,
    backgroundColor: '#e50000'
  },
  viewPager: {
   flex: 1,
   margin: 0,
  },
});

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
