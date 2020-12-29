import React, { useState } from 'react';
import { v4 } from 'uuid';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({
        id: v4(),
        title: text,
        done: false,
      });
      setText('');
    } else {
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
}

export default TodoForm;
