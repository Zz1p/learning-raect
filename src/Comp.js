import React from 'react';

function Comp(props) {
  return (
      <div>
        <h1>组件自身的内容</h1>
        {props.html}
        {props.children || <h1>默认值</h1>}
      </div>
  );
}

export default Comp;
