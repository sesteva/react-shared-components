'use strict';

export default (React,InnerComponent) => class extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: "", errors: [], sync: true };
    // Bind callback methods to make `this` the correct context.
    this.validate = this.validate.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onValueSubmit = this.onValueSubmit.bind(this);
  }

  validate(value) {
    var validations = [
      v => v.length < 15 || "Your name is too long!",
      v => v.indexOf('@') == -1 || "Your name contains '@'? Really?"
    ];
    return validations.map(f => f(value)).filter(e => e !== true);
  }

  onValueChange(value) {
    this.setState({
      value: value,
      errors: this.validate(value),
      sync: false
    });
  }

  onValueSubmit() {
    this.props.onSubmit(this.state.value);
    this.setState({
      value: ''
    });
  }

  render(){
    return <InnerComponent
      onValueSubmit={this.onValueSubmit}
      onValueChange={this.onValueChange}
      {...this.state}
      {...this.props} />
  }

}
