import React, { Component } from 'react'; // Import multiple exports
import Button from './Button'

class Counter extends Component {
  constructor(props) {
    super(props)
    // this.countUp = this.countUp.bind(this)  // イベントハンドラ内でthisにアクセスするためにbindを使うことができる
    this.state = {
      count: 0,
    };
  }

  countUp() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    
    // name += 'さん'; // this line is error, because name is const variable.
    return (
      <div>
        <p>{this.state.count}</p>
        {/* 
        イベントハンドラ内のthisはundefinedになるので↓はアローファンクションをButtonコンポーネントに渡している
        代替案としてconstructorなどでthisをbindする方法がある
        */}
        <Button value='count up' countUp={() => this.countUp()} />
      </div>
    );
  }
}

export default Counter;