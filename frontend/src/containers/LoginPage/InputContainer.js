import React from 'react';

export default ({ label, onChange, value, type }) => (
    <div className='login-form__input-container'>
        <div className='login-form__label-box'>
            <label className='login-form__label'>{ label }</label>
        </div>
        <div className='login-form__input-box'>
            <input className='login-form__input' {...{onChange, value, type}}/>
        </div>
    </div>
);
