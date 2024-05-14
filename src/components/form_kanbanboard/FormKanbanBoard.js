import React, { useState } from 'react';
import MoveTaskForm from './TaskForm/MoveTaskForm';
import Nav from '../Nav/Nav';
import './FormKanbanBoard.css';

const initialTasks = {
  'To Do': [{ title: 'Task 1', description: 'Description 1' }, { title: 'Task 2', description: 'Description 2' }],
  'Doing': [{ title: 'Task 3', description: 'Description 3' }],
  'Feedback': [],
  'Done': [{ title: 'Task 4', description: 'Description 4' }, { title: 'Task 5', description: 'Description 5' }],
};

const FormKanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (column, title, description) => {
    const newTask = { title, description };
    setTasks({ ...tasks, [column]: [...tasks[column], newTask] });
};

const moveTask = (task, target) => {
  const newTasks = { ...tasks };
  for (const column in newTasks) {
    newTasks[column] = newTasks[column].filter((t) => t !== task);
  }
  newTasks[target] = [...newTasks[target], task];
  setTasks(newTasks);
} 

  return (
    <>
    <Nav haveTaskForm={true} addTask={addTask} />
    <div className="formkanban-board">
      {Object.entries(tasks).map(([column, tasks], index) => (
        <div key={index} className="formkanban-column">
          <h2>{column}</h2>
          <div className="formkanban-cards">
            {tasks.map((task, index) => (
              <MoveTaskForm key={index} task={task} moveTask={moveTask} />
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default FormKanbanBoard;