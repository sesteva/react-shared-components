
import React, {
  Text,
  View
} from 'react-native'
import shallowHelpers  from 'react-shallow-renderer-helpers'
jest.setMock('react-native-vector-icons/FontAwesome', 'Icon')
const Preferences = require.requireActual('../PreferencesRender.native');
const shallowRenderer = shallowHelpers.createRenderer();

describe('Preferences', function() {

  shallowRenderer.render(() => <Preferences />);
  let output = shallowRenderer.getRenderOutput();

  it('should use title Personal Preferences', () => {
    expect(output.type).toBe(View);
    expect(output).toContainReactNodeInTreeLike(<Text>Personal Preferences</Text>);
  });

});
