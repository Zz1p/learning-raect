import React, {Component} from 'react';

export default class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 5
    }
    this.timer = setInterval(() => {

      this.setState({
        left: this.state.left - 1
      })
      if (this.state.left <= 0) {
        clearInterval(this.timer)
      }
      console.log(this.state.left);
    }, 1000)

  }
  render() {
    return (
        <h1>
          剩余事件： {this.state.left}
        </h1>
    )
  }
}
