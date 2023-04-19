import React, { Component } from 'react';
import './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;

    return (
      <div className="feedback">
        <div className="feedback__selector">
          <h1>Please leave feedback</h1>
          <button onClick={() => this.handleIncrement('good')}>Good</button>
          <button onClick={() => this.handleIncrement('neutral')}>
            Neutral
          </button>
          <button onClick={() => this.handleIncrement('bad')}>Bad</button>
        </div>
        <div className="feedback__statistics">
          <h1>Statistics</h1>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
