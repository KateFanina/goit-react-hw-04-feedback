import { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import {
  GOOD,
  NEUTRAL,
  BAD,
  feetbackTypes,
} from '../constants/feedbackTypes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stats: {
        [GOOD]: 0,
        [NEUTRAL]: 0,
        [BAD]: 0,
      },
    };
  }
  
  countTotalFeedback = () => {
    const { stats } = this.state;
    return Object.values(stats).reduce((acc, a) => acc + a, 0);
  }

  countPositiveFeedbackPercentage = () => {
    const { stats } = this.state;
    return (stats[GOOD]/ this.countTotalFeedback()*100).toFixed(0);
  }

  render() {
    const { stats } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          textAlign: 'center',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feetbackTypes}
            onIncrementStat={statName => {
              this.setState(prevState => ({
                stats: {
                  ...stats,
                  [statName]: prevState.stats[statName] + 1,
                },
              }));
            }}
          />
        </Section>
        <Section title="Statistics">
          <Statistics 
          stats={stats} 
          options={feetbackTypes} 
          total={this.countTotalFeedback()} 
          positiveRate={this.countPositiveFeedbackPercentage()}/>
        </Section>
      </div>
    );
  }
}

export default App;
