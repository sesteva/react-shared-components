
import React, {
  Text,
  View
} from 'react-native'
import shallowHelpers  from 'react-shallow-renderer-helpers'
jest.setMock('../../EditProfileName/EditProfileName.native', 'Input')
const UpdateProfile = require.requireActual('../UpdateProfileRender.native');
const shallowRenderer = shallowHelpers.createRenderer();

describe('UpdateProfile', function() {

  const renderComponent = (props)=> {
    shallowRenderer.render(() => <UpdateProfile {...props}/>);
    return shallowRenderer.getRenderOutput();
  }

  it('should use title Title', () => {
    let props = {
      actions: {
        updateProfile: ()=>{}
      }
    }
    let output = renderComponent(props);
    expect(output.type).toBe(View);
    expect(output).toContainReactNodeInTreeLike(<Text>Update Profile</Text>);
  });

});
