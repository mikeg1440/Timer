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
    const {seconds, minutes, hours} = this.state;
    let total = parseInt(seconds);
    if (minutes != 0) total += parseInt(minutes * 60);
    if (hours != 0) total += parseInt(hours * 3600);
    debugger
    return total;
  }

  formCallback = (hour, min, sec) => {
    this.setState({
      hours: hour,
      minutes: min,
      seconds: sec
    })
  }

  startTimer = () => {

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
          <Countdown date={Date.now() + (1000 * this.convertToSeconds())} autoStart='true' />
        </div>
      </div>
    );
  }

}

export default Timer;
