
import React from 'react'
import shallowHelpers  from 'react-shallow-renderer-helpers'
const EditProfile = require.requireActual('../EditProfileRender.web');
const shallowRenderer = shallowHelpers.createRenderer();

describe('EditProfile', function() {

  const renderComponent = (props)=> {
    shallowRenderer.render(() => <EditProfile {...props}/>);
    return shallowRenderer.getRenderOutput();
  }

  it('should use title Update Profile', () => {
    let props = {
       value:'',
       errors:[],
       sync: false,
       onValueChange: ()=>{},
       onValueSubmit: ()=>{}
    }
    let output = renderComponent(props);
    expect(output.type).toBe('div');
    expect(output).toContainReactNodeInTreeLike(<div>Update Profile</div>);
  });

});
