import React from 'react';

interface FetchJokesButtonProps {
  onClick: () => void;
}

const FetchJokesButton: React.FC<FetchJokesButtonProps> = React.memo(({ onClick }) => {
  return <button onClick={onClick}>New Jokes</button>;
});

export default FetchJokesButton;
