import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputContainer from './InputContainer';

import injectSaga from '../../utils/injectSaga';

import saga from './saga';
import * as actions from './actions';

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

const withConnect = connect((state) => ({}), Object.assign({}, actions));
const withSaga = injectSaga('auth', saga);

export default compose(
    withSaga,
    withConnect
)(LoginPage);
