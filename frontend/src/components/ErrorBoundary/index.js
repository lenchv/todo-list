import React from 'react';
import { connect } from 'react-redux';

const ErrorBoundary = ({ error, children }) => <>
    <div>{ error }</div>
    <div>{ children }</div>
</>;

export default connect(
    (state) => {
        return ({
            error: state.global.error.message
        });
    },
    {}
)(ErrorBoundary);
