import React, {Component} from 'react';
import OldLifeCycle from "./Components/OldLifeCycle";

class App extends Component {
  state = {
    n: 1,
    show: true
  }

  render() {
    const comp = this.state.show ? <OldLifeCycle n={this.state.n}/> : null
    return (
        <div>
          {comp}
          <button onClick={() => {
            this.setState(state => ({
              n: state.n + 1
            }))
          }}>props n++
          </button>
          <button onClick={() => {
            this.setState(state => state.show = !state.show)
          }}>显示/隐藏</button>
        </div>
    );
  }
}

export default App;
