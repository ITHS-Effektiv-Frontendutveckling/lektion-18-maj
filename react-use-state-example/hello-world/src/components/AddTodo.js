import { useState } from 'react';

function AddTodo({ update }) {
  const [newTodo, setNewTodo] = useState('');

  function handleInput(event) {
    setNewTodo(event.target.value)
  }

  function handleClick() {
    update(newTodo);
  }

  return (
    <section>
      <input type="text" onKeyUp={ handleInput } />
      <button onClick= { handleClick }>Lägg till todo</button>
    </section>
  )
}

export default AddTodo;