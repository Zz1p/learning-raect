import React, {Component} from "react";
import './Ball.css'

export default class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.x || 0,
      y: this.props.y || 0,
      xSpeed: this.props.xSpeed,
      ySpeed: this.props.ySpeed
    }
    setInterval(() => {
      let currentX = this.state.x + this.state.xSpeed * 16 / 1000;
      let currentY = this.state.y + this.state.ySpeed * 16 / 1000
      if (currentX <= 0) {
        currentX = 0;
        this.setState({
          xSpeed: -this.state.xSpeed
        })
      } else if (currentX >= document.documentElement.clientWidth - 100) {
        currentX = document.documentElement.clientWidth - 100;
        this.setState({
          xSpeed: -this.state.xSpeed
        })
      }
      if (currentY <= 0) {
        currentY = 0;
        this.setState({
          ySpeed: -this.state.ySpeed
        })
      } else if (currentY >= document.documentElement.clientHeight - 100) {
        currentY = document.documentElement.clientHeight - 100;
        this.setState({
          ySpeed: -this.state.ySpeed
        })
      }
      this.setState({
        x: currentX,
        y: currentY
      })
    }, 16)
  }

  render() {
    return (
        <div className="ball" style={{
          left: this.state.x,
          top: this.state.y,
        }}>
        </div>
    )
  }
}
