'use strict';

export default (React,InnerComponent) => class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "my username",
      errors: []
    };
  }

  render(){
    return <InnerComponent
      {...this.state}
      {...this.props} />
  }

}
