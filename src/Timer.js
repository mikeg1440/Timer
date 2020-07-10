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

  render() {
    return (
      <div>
        <TimeForm hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} />
        <h2 className='timer-text'>{this.state.minutes}:{this.state.seconds}</h2>
        <button>Start</button>
        <button onClick={() => this.showForm()}>Set Time</button>
        <button>Reset</button>
      </div>
    );
  }

}

export default Timer;