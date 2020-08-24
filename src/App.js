import React, {Component} from 'react';
import FormElement from './components/FormElement'

class App extends Component {
  state = {
    inputVal: ''
  }

  handleChange = e => {
    const value = e.target.value
    const name = e.target.name
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
        <div>
          <FormElement inputVal={this.state.inputVal} onChange={this.handleChange}/>
        </div>
    );
  }
}

export default App;
