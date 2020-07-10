import React, { Component } from 'react';
import Countdown from 'react-countdown';
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
      <div className='display-container'>
        <div className='control-container'>
          <TimeForm hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} callback={this.formCallback} />
          <button className='control-btn' onClick={() => this.startTimer()}>Start</button>
          <button className='control-btn' onClick={() => this.showForm()}>Set Time</button>
          <button className='control-btn'>Reset</button>
        </div>
        <div className='timer-text'>
          <Countdown date={Date.now() + (5000 + this.convertToSeconds())} autoStart='true' />
        </div>
      </div>
    );
  }

}

export default Timer;
