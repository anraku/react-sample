import React, { Component } from 'react'; // Import multiple exports
import './App.css';
import Counter from './component/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
