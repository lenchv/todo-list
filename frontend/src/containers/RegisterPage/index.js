import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from '../../utils/injectSaga';

import saga from './saga';
import * as actions from './actions';

class RegisterPage extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            userData: {
                username: '',
                login: '',
                password: '',
                repeatPassword: ''
            }
        };

        this.onChangeUserName = this.onChangeUserData.bind(this, 'username');
        this.onChangeLogin = this.onChangeUserData.bind(this, 'login');
        this.onChangePassword = this.onChangeUserData.bind(this, 'password');
        this.onChangeRepeatPassword = this.onChangeUserData.bind(this, 'repeatPassword');
        this.onRegister = this.onRegister.bind(this);
    }

    onChangeUserData(property, e) {
        this.setState(Object.assign(
            {},
            this.state,
            {
                userData: Object.assign(
                    {},
                    this.state.userData,
                    { [property]: e.target.value }
                )
            }
        ));
    }

    onRegister() {
        this.props.sendRegisterRequest(this.state.userData);
    }

    render() {
        return (
            <div>
                <div>
                    <label>Name</label>
                    <input type='text' onChange={this.onChangeUserName}/>
                </div>
                <div>
                    <label>Login</label>
                    <input type='text' onChange={this.onChangeLogin}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' onChange={this.onChangePassword}/>
                </div>
                <div>
                    <label>Repeat password</label>
                    <input type='password' onChange={this.onChangeRepeatPassword}/>
                </div>
                <div>
                    <button onClick={this.onRegister}>SignUp</button>
                </div>
            </div>
        );
    }
}

const withConnect = connect(state => ({}), Object.assign({}, actions));
const withSaga = injectSaga('register', saga);

export default compose(
    withSaga,
    withConnect
)(RegisterPage);
