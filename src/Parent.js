import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

export default class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor()
    }
  }
  changeColor = () => {
    this.setState({
      color: getRandomColor()
    })
  }
  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child handleColorChange={this.changeColor}/>
        <Child handleColorChange={this.changeColor}/>
      </div>
    )
  }
}