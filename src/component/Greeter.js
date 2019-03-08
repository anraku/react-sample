import React, { Component } from 'react'; // Import multiple exports

class Greeter extends Component {
  render() {
    const { name } = this.props;
    // name += 'さん'; // this line is error, because name is const variable.
    return (
      <p>Hello, {name}さん</p>
    );

  }
}

export default Greeter