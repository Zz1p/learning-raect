import React, {Component} from 'react';

class OldLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: this.props.n + 1
    }
    console.log('组件被创建');
  }

  componentWillMount() {
    console.log('组件即将被挂载')
  }

  componentDidMount() {
    console.log('组件已经被挂载')
    this.setState({
      name: 'xi'
    })
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('组件接收新的props值', nextProps, nextContext);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('组件是否应该渲染', nextProps, nextState, nextContext);
    return nextProps.n !== nextState.n;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('组件即将被渲染')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('组件已经被渲染')
  }

  componentWillUnmount() {
    console.log('组件被销毁')
  }

  render() {
    console.log('组件正在渲染')
    return (
        <div>
          <h1>state n :{this.state.n}</h1>
          <h1>props n : {this.props.n}</h1>
          <h1>{this.state.name}</h1>
          <button onClick={() => {
            this.setState({
              n: this.state.n + 1
            })
          }}>+
          </button>

        </div>
    );
  }
}

export default OldLifeCycle;
