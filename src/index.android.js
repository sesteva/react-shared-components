import React, {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  TouchableHighlight,
  ViewPagerAndroid,
  View
} from 'react-native';

import ToolbarAndroid from 'ToolbarAndroid';
import SampleView from './components/MyComponent/MyComponent.native';

class SampleApp extends Component {

  constructor(props){
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
  }

  openDrawer() {
    this.refs['DRAWER'].openDrawer()
  }

  goToPage(index) {
    this.refs['PAGER'].setPage(index);
  }

  onActionSelected(position) {
    if (position === 0) return this.openDrawer();
    if (position === 1) return this.goToPage(0);
  }

  render() {
    var navigationView = (
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
                {title: 'Page1', show: 'never'}
              ]}/>
            <ViewPagerAndroid
              initialPage={0}
              ref={'PAGER'}
              style={styles.viewPager}>
            	<SampleView />
            </ViewPagerAndroid>
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
