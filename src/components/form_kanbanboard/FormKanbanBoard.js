import React, { useState } from 'react';
import './FormKanbanBoard.css';

const initialTasks = {
  'To Do': [{ title: 'Task 1', description: 'Description 1' }, { title: 'Task 2', description: 'Description 2' }],
  'Doing': [{ title: 'Task 3', description: 'Description 3' }],
  'Feedback': [],
  'Done': [{ title: 'Task 4', description: 'Description 4' }, { title: 'Task 5', description: 'Description 5' }],
};

const FormKanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="kanban-board">
      {Object.entries(tasks).map(([column, tasks], index) => (
        <div key={index} className="kanban-column">
          <h2>{column}</h2>
          <div className="kanban-cards">
            {tasks.map((task, index) => (
              <div key={index} className="kanban-card">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormKanbanBoard;