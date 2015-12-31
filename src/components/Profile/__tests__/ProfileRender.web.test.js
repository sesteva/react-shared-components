
import React from 'react'
import shallowHelpers  from 'react-shallow-renderer-helpers'
const Profile = require.requireActual('../ProfileRender.web');
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
    expect(output.type).toBe('div');
    expect(output).toContainReactNodeInTreeLike(<span>Santiago</span>);
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
      <div>
        <span>Errors</span>
        <span>Failed to fetch</span>
      </div>
    );
  });

});
