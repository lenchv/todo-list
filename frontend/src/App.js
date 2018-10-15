import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  componentDidMount() {
    console.time();
    let j = 0;
    const t = 300;
    const res = () => {
      j++;
      if (j >= t) {
        console.timeEnd();
      }
    };
    for (let i = 0; i < t; i++) {
      fetch('/api/get')
        .then(res)
        .catch(res);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>Hello world!</div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
