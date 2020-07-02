import React from 'react';

function FunctionDefaultProps(props) {
  return (
      <div>
        name: {props.name}
      </div>
  );
}

FunctionDefaultProps.defaultProps = {
  name: 'function'
}

export default FunctionDefaultProps;
