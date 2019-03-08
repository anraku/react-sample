import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='message-box'>
        Hello {this.props.name}
      </div>
    );

  }
}

export default App;
