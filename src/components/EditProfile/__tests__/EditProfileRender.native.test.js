
import React, {
  Text,
  View
} from 'react-native'
import shallowHelpers  from 'react-shallow-renderer-helpers'
jest.setMock('react-native-vector-icons/FontAwesome', 'Icon')
const EditProfile = require.requireActual('../EditProfileRender.native');
const shallowRenderer = shallowHelpers.createRenderer();

describe('EditProfile', function() {

  const renderComponent = (props)=> {
    shallowRenderer.render(() => <EditProfile {...props}/>);
    return shallowRenderer.getRenderOutput();
  }

  it('should use title Name', () => {
    let props = {
       value:'',
       errors:[],
       sync: false,
       onValueChange: ()=>{},
       onValueSubmit: ()=>{}
    }
    let output = renderComponent(props);
    expect(output.type).toBe(View);
    expect(output).toContainReactNodeInTreeLike(<Text>Name</Text>);
  });

});
