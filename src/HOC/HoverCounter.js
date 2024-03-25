import React, { Component } from 'react'
import EnComponent from './Hoc'
class HoverCounter extends Component {
  render() {
    const {inc,count}=this.props
    return (
        <div>
          {this.props.name}
          <h1 onMouseOver={inc}>Click{count}</h1>
        </div>
      )
}
}
export default EnComponent(HoverCounter);
