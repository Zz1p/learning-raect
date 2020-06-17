import React, {Component} from 'react';

class App extends Component {
  state = {
    n: 0
  }
  handleClick = () => {
    this.setState({
      n: this.state.n + 1
    }, () => {
      // 这里的代码在状态改变之后触发
      console.log('cb console', this.state.n)
    })
    // cur的值是可信，多个setState就需要写成函数的形式
    this.setState(cur => ({
      n: cur.n + 1
    }), () => {
      console.log(this.state.n);
    })
    // 这一行代码在setState之前执行
    console.log('console', this.state.n);
  }

  render() {
    console.log('render')
    return (
        <div>
          <h1>{this.state.n}</h1>
          <button onClick={this.handleClick}>click</button>
        </div>
    );
  }
}

export default App;
