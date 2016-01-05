
import React from 'react'
import shallowHelpers  from 'react-shallow-renderer-helpers'
const UpdateProfile = require.requireActual('../UpdateProfileRender.web');
const shallowRenderer = shallowHelpers.createRenderer();

describe('UpdateProfile', function() {

  const renderComponent = (props)=> {
    shallowRenderer.render(() => <UpdateProfile {...props}/>);
    return shallowRenderer.getRenderOutput();
  }

  it('should use title Update Profile<', () => {
    let props = {
      actions: {
        updateProfile: ()=>{}
      }
    }
    let output = renderComponent(props);
    expect(output.type).toBe('div');
    expect(output).toContainReactNodeInTreeLike(<span>Update Profile</span>);
  });

});
