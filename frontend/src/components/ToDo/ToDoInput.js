import React from 'react';

export default props => (
    <div className='todo-add__input-container'>
        <input {...props} type='text' className='todo-add__input' />
    </div>
);
