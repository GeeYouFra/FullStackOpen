import { useState } from 'react';

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine value={props.good} text='good' />
          <StatisticLine value={props.neutral} text='neutral' />
          <StatisticLine value={props.bad} text='bad' />
          <StatisticLine value={props.total} text='total' />
          <StatisticLine value={props.average} text='average' />
          <StatisticLine value={props.positive + ' %'} text='positive' />
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = ({ value, text }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

function App() {
  const title = 'Give Feedback';
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);

  const handleNeutralClick = () => setNeutral(neutral + 1);

  const handleBadClick = () => setBad(bad + 1);

  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <Header title={title} />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
        title='Statistics'
        text='No Feedback Given Yet!'
      />
    </div>
  );
}

export default App;
