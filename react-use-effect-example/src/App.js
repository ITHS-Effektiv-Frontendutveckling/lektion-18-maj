import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Christoffer');
  const [greeting, setGreeting] = useState('');

  //Körs varje gång state uppdateras
  useEffect(() => {
    console.log('State uppdateras');
  });

  //Körs enbart en gång när komponenten laddas
  useEffect(() => {
    console.log('Körs enbart vid sidladdning');
  }, []);

  //Körs enbart när greeting (i useState) uppdateras
  useEffect(() => {
    console.log('Nu uppdaterades greeting');
  }, [greeting]);

  return (
    <section>
      <h2>Hej { name }</h2>
      <button onClick={ () => { setName('Ada') }}>Byt namn</button>
      <button onClick={ () => { setGreeting('Hejsan') }}>Byt hälsning</button>
    </section>
  );
}

export default App;