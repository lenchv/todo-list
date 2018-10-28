import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';

import saga from './saga';
import * as actions from './actions';
import reducer from './reducer';

const InputContainer = ({ label, onChange, value, type }) => (
    <div className='login-form__input-container'>
        <div className='login-form__label-box'>
            <label className='login-form__label'>{ label }</label>
        </div>
        <div className='login-form__input-box'>
            <input className='login-form__input' {...{onChange, value, type}}/>
        </div>
    </div>
);

class LoginPage extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            login: '',
            password: ''
        };

        this.onChangeLogin = this.onChange.bind(this, 'login');
        this.onChangePassword = this.onChange.bind(this, 'password');
        this.onLogin = this.onLogin.bind(this);
    }

    onChange(property, e) {
        this.setState({
            [property]: e.target.value
        });
    }

    onLogin() {
        this.props.sendLoginRequest({
            login: this.state.login,
            password: this.state.password
        });
    }
    
    render() {
        return (
            <div className='login-page'>
                <div className='login-form'>
                    <div className='login-form__header'>Login as</div>
                    <div>{ this.props.error }</div>
                    <div className='login-form__body'>
                        <InputContainer
                            label={ 'Login' }
                            onChange={ this.onChangeLogin }
                            type={'text'}
                            value={ this.state.login }
                        />
                        <InputContainer
                            label={ 'Password' }
                            onChange={ this.onChangePassword }
                            type={'password'}
                            value={ this.state.password }
                        />
                        <div className='login-form__buttons-container'>
                            <button className='login-form__button' onClick={this.onLogin}>Log in</button>
                            <span className='login-form__text login-form__text--or'> or </span>
                            <Link to='/register' ><span className='login-form__link login-form__link--sign-up'>Sign up</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const withConnect = connect((state) => ({
    error: state.auth.error
}), Object.assign({}, actions));
const withSaga = injectSaga('auth', saga);
const withReducer = injectReducer('auth', reducer);

export default compose(
    withReducer,
    withSaga,
    withConnect
)(LoginPage);
