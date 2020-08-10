import React from 'react';
import './index.css'

export default function ThreeLayout(props) {
  const defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
    minWidth: 800
  }
  const data = {...defaultProps, ...props}
  return (
      <div className="three-layout" style={{
        minWidth: data.minWidth
      }}>
        <div className="aside left" style={{
          width: data.leftWidth
        }}>
          {props.left}
        </div>
        <div className="middle">
          {props.children}
        </div>
        <div className="aside right"  style={{
          width: data.rightWidth
        }}>
          {props.right}
        </div>
      </div>
  );
}

