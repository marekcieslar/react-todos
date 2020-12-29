import React from 'react';

function TodoListElement({ id, title, done, removeTodo, changeStateTodo }) {
  return (
    <div>
      <input
        type="checkbox"
        value={done}
        onChange={() => changeStateTodo(id)}
      />
      {title} <button onClick={() => removeTodo(id)}>X</button>
    </div>
  );
}

export default TodoListElement;
