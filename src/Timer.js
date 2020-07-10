import React, { Component } from 'react';
import TimeForm from './TimeForm';

class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      hours: 0,
      minutes: 5,
      seconds: 0
    }
  }

  showForm = () => {
    let form = document.querySelector('#time-form');

    form.style.display = 'block';
  }

  convertToSeconds = () => {
    let seconds = parseInt(this.state.seconds);
    seconds += parseInt(this.state.minutes * 60);
    seconds += parseInt(this.state.hours * 3600);
    return seconds;
  }

  formCallback = (hour, min, sec) => {
    this.setState({
      hours: hour,
      minutes: min,
      seconds: sec
    })
  }

  render() {
    return (
      <div>
        <TimeForm hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} callback={this.formCallback} />
        <h2 className='timer-text'>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</h2>
        <button>Start</button>
        <button onClick={() => this.showForm()}>Set Time</button>
        <button>Reset</button>
      </div>
    );
  }

}

export default Timer;
