import React from 'react';

interface JokeListProps {
  jokes: string[];
}

const JokeList: React.FC<JokeListProps> = ({ jokes }) => {
  return (
    <ul>
      {jokes.map((joke, index) => (
        <li key={index}>{joke}</li>
      ))}
    </ul>
  );
};

export default JokeList;
