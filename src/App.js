import React, {Component} from 'react';
import ThreeLayout from "./components/ThreeLayout";
class App extends Component {
  render() {
    return (
        <ThreeLayout left={'left'} right={<div>hello right</div>}>
          <div style={{color: 'red'}}>
            hello world
          </div>
        </ThreeLayout>
    );
  }
}

export default App;
