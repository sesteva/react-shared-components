'use strict';

export default (React,InnerComponent) => class extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.loadProfile('60040d87c9ebf803')
  }

  render(){
    return <InnerComponent
      {...this.state}
      {...this.props} />
  }

}
