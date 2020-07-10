import React, { Component } from 'react';

class TimeForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      hours: props.hours,
      minutes: props.minutes,
      seconds: props.seconds
    }
  }

  render() {
    return (
      <div className='modal' id='time-form'>
      </div>
    );
  }

}

export default TimeForm;
