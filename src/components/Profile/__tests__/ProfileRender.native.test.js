
import React, {
  Text,
  View
} from 'react-native'
import shallowHelpers  from 'react-shallow-renderer-helpers'
const Profile = require.requireActual('../ProfileRender.native');
const shallowRenderer = shallowHelpers.createRenderer();

describe('Profile', function() {
  const renderComponent = (props)=> {
    shallowRenderer.render(() => <Profile {...props}/>);
    return shallowRenderer.getRenderOutput();
  }

  it('should render username', () => {
    let props = {
      'profile':{
        'username': 'Santiago'
      }
    }
    let output = renderComponent(props);
    expect(output.type).toBe(View);
    expect(output).toContainReactNodeInTreeLike(<Text>Santiago</Text>);
  });

  it('should render error', ()=> {
    let props = {
      'profile':{
        'username': '',
        'error': 'Failed to fetch'
      }
    }
    let output = renderComponent(props);
    expect(output).toContainReactNodeInTreeLike(
      <View>
        <Text>Errors</Text>
        <Text>Failed to fetch</Text>
      </View>
    );
  });

});
