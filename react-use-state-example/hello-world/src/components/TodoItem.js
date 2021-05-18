//Här använder vi object destructuring där vi plockar ut task från props-objektet
function TodoItem({ task, done }) {
  console.log('TodoItem props:', task);
  let doneText = 'Ej klar';

  if (done) {
    doneText = 'Klar'
  }

  return (
    <li>{ task } - { done ? 'Klar' : 'Ej klar' }</li>
  )
}

export default TodoItem;