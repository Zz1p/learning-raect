import React, {Component} from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time
    }
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time - 1
      })
      if (this.state.time <= 0) {
        clearInterval(this.timer)
      }
    }, 1000)
  }
  render() {
    return (
        <div>
          剩余时间: {this.state.time}
        </div>
    );
  }
}

export default Countdown;
