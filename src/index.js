import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comp from "./Comp";

ReactDOM.render(
    <Comp html={<h1>传递的元素内容</h1>}>
      <h1>children</h1>
      <h1>children2</h1>
    </Comp>,
    document.getElementById('root')
);
