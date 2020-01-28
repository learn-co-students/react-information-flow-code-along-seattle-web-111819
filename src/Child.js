import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    // console.log(this.props)
    return (
      // pass this handleColorChange prop into a React event handler
      // Child will have a prop called handleColorChange that is a function
      <div onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
