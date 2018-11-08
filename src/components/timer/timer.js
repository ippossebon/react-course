import React, { Component } from 'react';

import './timer.css'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
     this.setState({ secondsElapsed: this.state.secondsElapsed + 1 })
  }

  render() {
    return (
      <div className='timer'>
        Seconds: {this.state.secondsElapsed}
      </div>
    )
  }
}

export default Timer;
