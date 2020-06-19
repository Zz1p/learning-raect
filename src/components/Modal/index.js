import React from 'react';
import './index.css'

function Modal(props) {
  const dom = props.showModal ? (
      <div className="modal" onClick={e => {
        props.onClose()
      }}>
        <div className="modal-content" onClick={e => {
          e.stopPropagation()
        }}>
          <button onClick={() => {
            props.onClose()
          }}>hide
          </button>
        </div>
      </div>) : null
  return (
      <div>
        {dom}
      </div>
  );
}

export default Modal;
