'use strict';

export default function (React) {

  class MyComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = { value: "", errors: [], sync: true };
      // Bind callback methods to make `this` the correct context.
      this.validate = this.validate.bind(this);
      this.syncToServer = this.syncToServer.bind(this);
      this.onValueChange = this.onValueChange.bind(this);
    }

    validate(value) {
      var validations = [
        v => v.length < 15 || "Your name is too long!",
        v => v.indexOf('@') == -1 || "Your name contains '@'? Really?"
      ];
      return validations.map(f => f(value)).filter(e => e !== true);
    }

    syncToServer() {
      // Using a timeout to simulate a server call
      clearTimeout(this._syncRequest);
      this._syncRequest = setTimeout(() => {
        var newState = this.state;
        newState.sync = true;
        this.setState(newState);
      }, 2000);
    }

    onValueChange(value) {
      this.setState({
        value: value,
        errors: this.validate(value),
        sync: false
      });
      this.syncToServer();
    }

    render() {
      var {value, errors, sync } = this.state;
      var RenderView = this.props.view;

      return <RenderView value={value}
        errors={errors}
        sync={sync}
        onValueChange={this.onValueChange} />;
    }

  }

  return MyComponent;
};
