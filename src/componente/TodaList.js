import React from 'react';

function TodoList() {
  const tasks = [
    'Learn React',
    'Climb Mt. Everest',
    'Run a marathon',
    'Feed the dogs'
  ];

  return (
    <div>
      <h2>Things I need to do:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
