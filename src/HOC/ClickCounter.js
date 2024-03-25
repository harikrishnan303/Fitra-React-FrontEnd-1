import React, { Component } from 'react'
import EnComponent from './Hoc'

class ClickCounter extends Component {
    render() {
    return (
      <div>
        <button onClick={this.props.inc}><h1>Click{this.props.count}</h1></button>
      </div>
    )
  }
}
export default EnComponent(ClickCounter);
