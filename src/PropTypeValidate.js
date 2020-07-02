import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PropTypeValidate extends Component {
  static  propTypes = {
    name: PropTypes.number
  }

  render() {
    return (
        <div>
          name: {this.props.name}
        </div>
    );
  }
}

export default PropTypeValidate;
