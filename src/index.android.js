import React, {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Navigator,
  View
} from 'react-native';

import ToolbarAndroid from 'ToolbarAndroid';
import SampleView from './components/MyComponent/MyComponent.native';
import MainPage from './components/MainPage/MainPage.native';

class SampleApp extends Component {

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
  }

  renderScene(route) {
    switch (route.name) {
    case 'home':
      return <MainPage />;
    default:
      console.error('Encountered unexpected route: ' + route.name);
    }
    return <MainPage />;
  }

  render() {
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
              actions={[
                {title: 'Menu', show: 'never'},
                {title: 'Home', show: 'never'}
              ]}/>
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


AppRegistry.registerComponent('SampleApp', () => SampleApp);
