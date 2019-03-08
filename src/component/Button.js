import React, { Component } from 'react'; // Import multiple exports

class Button extends Component {
  render() {
    const { value,  countUp } = this.props;
    // name += 'さん'; // this line is error, because name is const variable.
    return (
      <button onClick={countUp}>{value}</button>
    );
  }
}

export default Button;