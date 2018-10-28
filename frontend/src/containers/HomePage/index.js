import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import reducer from './reducer';
import saga from './saga';
import { changeValue } from './actions';
import ToDo from '../ToDo';

class HomePage extends React.PureComponent {
    render() {
        return (
            <div className='homepage'>
                <div className='todo-search'>
                    <input type='text' className='todo-search__input' />
                </div>
                <ToDo />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    value: state.home.value
});

const withConnect = connect(mapStateToProps, {
    changeValue
});

const withReducer = injectReducer('home', reducer);
const withSaga = injectSaga('home', saga);

export default compose(
    withReducer,
    withSaga,
    withConnect
)(HomePage);
