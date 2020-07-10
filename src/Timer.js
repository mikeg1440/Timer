import React, { Component } from 'react';
class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      hours: 0,
      minutes: 5,
      seconds: 0
    }
  }
  render() {
    return (
      <div>
        <h2 className='timer-text'>{this.state.minutes}:{this.state.seconds}</h2>
        <button>Start</button>
        <button onClick={() => this.showForm()}>Set Time</button>
        <button>Reset</button>
      </div>
    );
  }

}

export default Timer;
