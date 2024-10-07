import React, { useState, useEffect } from 'react';
import JokeList from './components/JokeList';
import FetchJokesButton from './components/FetchJokesButton ';

const JokeApp: React.FC = () => {
  const [jokes, setJokes] = useState<string[]>([]);
  const numberOfJokes = 10;


  const fetchJokes = async (): Promise<void> => {
    const urls = Array(numberOfJokes).fill('https://api.chucknorris.io/jokes/random');
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const jokesData = await Promise.all(responses.map(res => res.json()));
    setJokes(jokesData.map((joke: { value: string }) => joke.value));
  };

  useEffect(() => {
    fetchJokes()
  },[])

  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      <JokeList jokes={jokes} />
      <FetchJokesButton onClick={fetchJokes} />
    </div>
  );
};

export default JokeApp;
