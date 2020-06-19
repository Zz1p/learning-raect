import React, {Component} from 'react';
import Modal from "./components/Modal";

class App extends Component {
  state = {
    showModal: false
  }

  render() {
    return (
        <div>
          <button onClick={() => {
            this.setState(state => ({showModal: true}))
          }}>show
          </button>
          <Modal showModal={this.state.showModal} onClose={() => {
            this.setState({
              showModal: false
            })
          }}/>
        </div>
    );
  }
}

export default App;
