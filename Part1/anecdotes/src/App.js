import { useState } from 'react';

const Header = ({ title, text, voteCount }) => (
  <div>
    <h1>{title}</h1>
    <p>{text}</p>
    <p>Currently has {voteCount} votes.</p>
  </div>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Winner = ({ title, anecdotes, vote }) => {
  const mostVotes = Math.max(...vote); // choose the highest or largest number of votes
  const index = vote.indexOf(mostVotes); // among all the number of votes, indexOf will choose the highest or largest number of votes
  const winner = anecdotes[index]; // console.log(anecdotes[index]);
  if (mostVotes === 0) {
    return (
      <div>
        <h1>Cast your votes.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{winner}</p>
      <p>Won with {mostVotes} votes!</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];

  const [selected, setSelected] = useState(0);
  const handleRandom = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));
  const handleVote = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  return (
    <div>
      <Header
        title='Anecdote of the day <3'
        text={anecdotes[selected]}
        voteCount={vote[selected]}
      />
      <Button handleClick={handleVote} text='Vote' />
      <Button handleClick={handleRandom} text='Next anecdote' />
      <Winner
        title='Anecdote with the most vote *.*'
        anecdotes={anecdotes}
        vote={vote}
      />
    </div>
  );
};

export default App;
