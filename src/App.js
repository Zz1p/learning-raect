import React from 'react';
import FunctionDefaultProps from "./FunctionDefaultProps";
import ClassDefaultProps from './ClassDefaultProps';
import PropTypeValidate from './PropTypeValidate';

function App(props) {
  return (
      <div>
        <FunctionDefaultProps />
        <ClassDefaultProps />
        <PropTypeValidate name={'check'}/>
      </div>
  );
}

export default App;
