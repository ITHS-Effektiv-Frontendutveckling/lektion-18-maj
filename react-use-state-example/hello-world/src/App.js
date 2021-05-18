import { useState } from 'react';
import './App.css';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

//Funktionella komponenter i React måste starta med en stor bokstav
//Detta för att React ska veta att det är en komponent
function App() {
  const [todos, setTodos] = useState([
    { task: 'Köp kaffe', done: true, id: 1 },
    { task: 'Köp kaka', done: false, id: 2 },
    { task: 'Brygg kaffe', done: false, id: 3 },
    { task: 'Drick kaffe', done: false, id: 4 }
  ]);

  function updateTodo(todoText) {
    console.log('I updateTodo')
    const todo = {
      task: todoText,
      done: false,
      id: todos.length + 1
    }

    // let copyTodos = [...todos];
    // const newTodos = copyTodos.concat(todo);
    // setTodos(newTodos);

    //Vi skickar in en funktion där vi får ut nuvarande todos-array och sen kopierar
    //vi denna array med spread-operatorn(...) också lägger till den nya todo:n som
    //resulterar i en ny array som sparas
    setTodos(currentTodos => {
      return [...currentTodos, todo]
    })
    console.log('Todo array:', todos);
  }

  return (
    <section className="App-wrapper">
      <h1>Todo</h1>
      <ul className="App-list">
        { /** Loopar ut med array-metoden map som returnerar en komponent för varje objekt i arrayen
         * och skickar med varje objekt som props till TodoItem
         */}
        { todos.map((todo) => {
          return <TodoItem task={ todo.task } done={ todo.done } key={ todo.id } />
        }) }

        {/* <TodoItem task='Köp kaffe' done={ true } />
        <TodoItem task='Köp kaka' done={ isDone } />
        <TodoItem task='Brygg kaffe' done={ isDone } />
        <TodoItem task='Drick kaffe' done={ isDone } /> */}
      </ul>

      <AddTodo update={ updateTodo } />
    </section>
  );
}

export default App;
