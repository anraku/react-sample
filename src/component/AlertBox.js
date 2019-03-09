import React, { Component } from 'react'; // Import multiple exports

class AlertBox extends Component {
  render () {
    return <div className='alert-box'>
      {this.props.children}
    </div>
  }
}

export default AlertBox;