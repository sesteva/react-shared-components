
import React, {
  Text,
  View
} from 'react-native'
import shallowHelpers  from 'react-shallow-renderer-helpers'
const ActiveTrips = require.requireActual('../ActiveTripsRender.native');
const shallowRenderer = shallowHelpers.createRenderer();

describe('ActiveTrips', function() {

  shallowRenderer.render(() => <ActiveTrips />);
  let output = shallowRenderer.getRenderOutput();

  it('should use title ActiveTrips', () => {
    expect(output.type).toBe(View);
    expect(output).toContainReactNodeInTreeLike(<Text>Active Trips</Text>);
  });

});
