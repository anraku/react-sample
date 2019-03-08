import React, { Component, Fragment } from 'react'; // Import multiple exports
import './App.css';
import Counter from './component/Counter';
import AlertBox from './component/AlertBox';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Counter />
        <AlertBox>
          <h1>You have pending notifications</h1>
        </AlertBox>
      </Fragment>
    );
  }
}

export default App;
