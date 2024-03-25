import React, { Component } from 'react'
const EnComponent=(OrComponent)=>
{
  class NewComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  increment=()=>
      {
          this.setState({count:this.state.count+1})
      }
  render() {
    return <OrComponent count={this.state.count} inc={this.increment} />
  }
}
return NewComponent
}
export default EnComponent;