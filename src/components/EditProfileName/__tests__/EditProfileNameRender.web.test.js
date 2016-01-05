
import React from 'react'
import shallowHelpers  from 'react-shallow-renderer-helpers'
const EditProfileName = require.requireActual('../EditProfileNameRender.web');
const shallowRenderer = shallowHelpers.createRenderer();

describe('EditProfileName', function() {

  const renderComponent = (props)=> {
    shallowRenderer.render(() => <EditProfileName {...props}/>);
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
    expect(output).toContainReactNodeInTreeLike(<label>Name</label>);
  });

});
