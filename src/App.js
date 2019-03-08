import React, { Component } from 'react'; // Import multiple exports
import './App.css';
import Greeter from './component/Greeter';

class App extends Component {
  render() {
    return (
      <div className='message-box'>
        <Greeter name='anraku' />
      </div>
    );

  }
}

export default App;
