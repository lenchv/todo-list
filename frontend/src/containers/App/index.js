import React from 'react';
import Routes from './Routes';
import ErrorBoundary from '../../components/ErrorBoundary';

const App = () => {
    return (
        <ErrorBoundary>
            <Routes />
        </ErrorBoundary>
    );
};

export default App;
