
import React from 'react'
import shallowHelpers  from 'react-shallow-renderer-helpers'
const Preferences = require.requireActual('../PreferencesRender.web');
const shallowRenderer = shallowHelpers.createRenderer();

describe('ActiveTrips', function() {

  shallowRenderer.render(() => <Preferences />);
  let output = shallowRenderer.getRenderOutput();

  it('should use title ActiveTrips', () => {
    expect(output.type).toBe('div');
    expect(output).toContainReactNodeInTreeLike(<span>Personal Preferences</span>);
  });

});
