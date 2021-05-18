import { useState, useEffect } from 'react';
import './App.css';

import Pokemon from './components/Pokemon';
import FavoritePokemon from './components/FavoritePokemon';

/**
 * 1. Hämta pokemons från ett API med useEffect
 * 2. Spara pokemons från API-svaret i ett state med useState
 * 3. Visa alla pokemons på en sida
 * 4. Det ska gå att spara sin favoritpokemon i ett state
 *    a. Lägg till ett klick-event på varje pokemon
 *    b. När vi klickar på en pokemon spara det i ett annat state
 *    c. Visa alla favoritpokemon
 */

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
      async function getPokemons() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=10');
        const data = await response.json();

        setPokemons(data.results);
      }
      
      getPokemons();
  }, []);

  useEffect(() => {
    alert('Ny favorit sparad');
  }, [favorites])

  function updateFavorites(pokemon) {
    setFavorites(currentFavorites => {
      return [...currentFavorites, pokemon]
    })
  }

  return (
    <section>
      <article>
        <h2>Pokemons</h2>
        { pokemons.map((pokemon, index) => {
          return <Pokemon name={ pokemon.name } update={ updateFavorites } key={ index } />
        })}
      </article>
      <article>
        <h2>Favorites</h2>
        { favorites.map((favorite, index) => {
          return <FavoritePokemon name={ favorite } key={ index } />
        })}
      </article>
    </section>
  );
}

export default App;
