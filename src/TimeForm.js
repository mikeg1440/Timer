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
        <form className='modal-content'>
          <label>Hours</label>
          <input type='text' value={this.state.hours} />
          <br />

          <label>Minutes</label>
          <input type='text' value={this.state.minutes} />
          <br />

          <label>Seconds</label>
          <input type='text' value={this.state.seconds} />
          <br />

          <button type='submit'>Set Timer</button>
        </form>
      </div>
    );
  }

}

export default TimeForm;
