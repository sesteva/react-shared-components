
import React from 'react'
import shallowHelpers  from 'react-shallow-renderer-helpers'
const ActiveTrips = require.requireActual('../ActiveTripsRender.web');
const shallowRenderer = shallowHelpers.createRenderer();

describe('ActiveTrips', function() {

  shallowRenderer.render(() => <ActiveTrips />);
  let output = shallowRenderer.getRenderOutput();

  it('should use title ActiveTrips', () => {
    expect(output.type).toBe('div');
    expect(output).toContainReactNodeInTreeLike(<span>Active Trips</span>);
  });

});
