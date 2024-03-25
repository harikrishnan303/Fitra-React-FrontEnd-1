import React, { Component } from 'react'

export default class statex extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0,
       name:"guru"
    }
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  render() {
    return (
      <>
      <button onClick={this.increment}><h1>Click {this.state.count}</h1></button>
      </>
    )
  }
}
