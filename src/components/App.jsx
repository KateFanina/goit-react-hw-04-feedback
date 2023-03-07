import { useState } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import {
  GOOD,
  NEUTRAL,
  BAD,
  feetbackTypes,
} from '../constants/feedbackTypes';

function App () {
  const [stats, setStats] = useState({
    [GOOD]: 0,
    [NEUTRAL]: 0,
    [BAD]: 0,
  });
  
  const countTotalFeedback = () => {
    const newStats = {...stats}
    return Object.values(newStats).reduce((acc, value) => acc + value, 0);
  }

  const countPositiveFeedbackPercentage = () => {
    const newStats = {...stats}
    return (newStats[GOOD]/ countTotalFeedback()*100).toFixed(0);
  }

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
              setStats(prevState => ({
                ...prevState,
                [statName]: prevState[statName] + 1,
              }));
            }}
          />
        </Section>
        <Section title="Statistics">
          <Statistics 
          stats={stats} 
          options={feetbackTypes} 
          total={countTotalFeedback()} 
          positiveRate={countPositiveFeedbackPercentage()}/>
        </Section>
      </div>
    );
  };

export default App;
