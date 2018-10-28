import React from 'react';

export default (props) => (
    <div className='todo-add__button-container'>
        <button {...props} className='todo-add__button'>{props.children}</button>
    </div>
);
