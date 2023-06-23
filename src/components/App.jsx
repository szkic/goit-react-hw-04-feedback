import React, { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnNames = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;
  const percentage = Math.round((good / total) * 100) || 0;

  const countFeedback = e => {
    const {
      target: { name },
    } = e;

    switch (name) {
      case 'good':
        setGood(g => g + 1);
        break;
      case 'neutral':
        setNeutral(n => n + 1);
        break;
      case 'bad':
        setBad(b => b + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title={'Please leave Feedback'}>
        <FeedbackOptions options={btnNames} onLeaveFeedback={countFeedback} />
      </Section>

      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={percentage}
        />
      </Section>
    </>
  );
};
