'use string';
const React = require('react');
const ReactNative = React;

ReactNative.StyleSheet = {
    create: function create(styles) {
        return styles;
    }
};
class View extends React.Component {
    render() { return false; }
}
class PixelRatio extends React.Component {
    static get() { return 1; }
}
ReactNative.View = View;
ReactNative.ScrollView = View;
ReactNative.Text = View;
ReactNative.TouchableOpacity = View;
ReactNative.TouchableWithoutFeedback = View;
ReactNative.ToolbarAndroid = View;
ReactNative.Image = View;
ReactNative.PixelRatio = PixelRatio;
ReactNative.NativeModules= {};

ReactNative.Platform = {};
module.exports = ReactNative;
