import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

function sum() {
  console.log(arguments);
  let result = 0;
  for (let i of arguments) {
      result +=i
  }
  console.log(result);
}

function curry(fn) {
  let args = []
  return function next() {
    args = args.concat(...arguments)
    if (!arguments.length) {
      return fn.apply(this, args)
    }
    return next
  }

}

var fn = curry(sum)

fn(1,2)(3,4)();

function add() {
  [].slice.call(arguments)
}

add(1)(2)(3)
