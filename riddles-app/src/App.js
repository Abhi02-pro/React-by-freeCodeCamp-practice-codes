import React from "react";

import Joke from "./joke.js";
import JokeData from "./JokeData.js";

function App() {
  const jokeComponents = JokeData.map((newJoke) => (
    <Joke
      key={newJoke.id}
      question={newJoke.question}
      answer={newJoke.answer}
    />
  ));

  return <div>{jokeComponents}</div>;
}

export default App;
