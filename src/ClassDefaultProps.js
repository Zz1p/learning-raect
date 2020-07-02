import React, {Component} from 'react';

class ClassDefaultProps extends Component {
  static defaultProps = {
    name: 'class',
  }
  constructor(props) {
    super(props);
    console.log('class props', props)
  }

  render() {
    return (
        <div>
          name: {this.props.name}
          <br/>
          age: {this.props.age}
        </div>
    );
  }
}

ClassDefaultProps.defaultProps = {
  age: 80
}

export default ClassDefaultProps;
