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

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='modal' id='time-form'>
        <form className='modal-content'>
          <label>Hours</label>
          <input onChange={this.handleChange} name='hours' type='text' value={this.state.hours} />
          <br />

          <label>Minutes</label>
          <input onChange={this.handleChange} name='minutes' type='text' value={this.state.minutes} />
          <br />

          <label>Seconds</label>
          <input onChange={this.handleChange} name='seconds' type='text' value={this.state.seconds} />
          <br />

          <button type='submit'>Set Timer</button>
        </form>
      </div>
    );
  }

}

export default TimeForm;
