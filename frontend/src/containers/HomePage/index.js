import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import reducer from './reducer';
import saga from './saga';
import { changeValue } from './actions';

class HomePage extends React.PureComponent {
    render() {
        return (
            <div>
                <span>{this.props.value}</span>
                <input type="text" onChange={(e) => {
                    this.props.changeValue(e.target.value)}
                } />
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
