import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    toggle: true

  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="React is bitchin"/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.toggle &&
            <p>This should show and hide</p>
        }

        <button onClick={this.toggle}>Show / Hide</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    //take text property from props, to avoid writting this.props
    const { text } = this.props;
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
