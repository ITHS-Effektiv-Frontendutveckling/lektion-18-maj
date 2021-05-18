import { useState, useEffect } from 'react';
import './App.css';

/**
 * 1. Hämta 10 skämt från joke API med fetch
 * 2. Spara dessa skämt i ett state
 * 3. Slumpa sedan ett skämt och visa på sidan
 * 4. Det ska finnas en knapp för att slumpa ett nytt skämt
 */

import booksArray from './assets/childrensbooks.json';


function App() {
  const [jokes, setJokes] = useState([]);
  const [selectedJoke, setSelectedJoke] = useState({});
  const [books, setBooks] = useState(booksArray);

  useEffect(() => {
    async function getJokes() {
      const response = await fetch('https://official-joke-api.appspot.com/random_ten');
      const data = await response.json();

      setJokes(data);
    }

    getJokes();
  }, []);

  function getRandomJoke() {
    const index = Math.floor(Math.random() * jokes.length);
    const joke = jokes[index];

    setSelectedJoke(joke);
  }

  useEffect(() => {
    getRandomJoke();
  }, [jokes]);

  return (
    <div className="App">
      { selectedJoke ?
      <article>
        <p>{ selectedJoke.setup }</p>
        <p>{ selectedJoke.punchline }</p>
      </article> :
        <p>Inget skämt valt</p>
      }

      <button onClick={ getRandomJoke }>Slumpa nytt skämt</button>
    </div>
  );
}

export default App;
