'use strict';

export default (React,InnerComponent) => class extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // this.props.loadPreferences('60040d87c9ebf803')
  }

  render(){
    return <InnerComponent
      {...this.state}
      {...this.props} />
  }

}
