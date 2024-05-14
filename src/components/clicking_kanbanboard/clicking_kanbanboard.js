import React, { useState } from 'react';
import './clicking_kanbanboard.css';

const initialTasks = {
    'To Do': [{ title: 'Task 1', description: 'Description 1' }, { title: 'Task 2', description: 'Description 2' }],
    'Doing': [{ title: 'Task 3', description: 'Description 3' }],
    'Feedback': [],
    'Done': [{ title: 'Task 4', description: 'Description 4' }, { title: 'Task 5', description: 'Description 5' }],
};

const ClickingKanbanBoard = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [selectedTask, setSelectedTask] = useState(null);

    const addTask = (column) => {
        const newTask = { title: 'New Task', description: 'New Description' };
        setTasks({ ...tasks, [column]: [...tasks[column], newTask] });
    };

    const selectTask = (column, index) => {
        setSelectedTask({ column, index });
    };

    const moveTask = (toColumn) => {
        if (selectedTask) {
            const task = tasks[selectedTask.column][selectedTask.index];
            const newTasks = { ...tasks };
            newTasks[selectedTask.column].splice(selectedTask.index, 1);
            newTasks[toColumn].push(task);
            setTasks(newTasks);
            setSelectedTask(null);
        }
    };

    const handleBlur = (column, index, type, e) => {
        const newTasks = { ...tasks };
        newTasks[column][index][type] = e.target.textContent;
        setTasks(newTasks);
    };

    return (
        <div className="kanban-board">
            {Object.entries(tasks).map(([column, tasks], index) => (
                <div key={index} className="kanban-column" onClick={() => moveTask(column)}>
                    <h2>{column}</h2>
                    <button className="add-button" onClick={(e) => { e.stopPropagation(); addTask(column); }}>+</button>
                    <div className="kanban-cards">
                        {tasks.map((task, index) => (
                            <div key={index} className="kanban-card" onClick={() => selectTask(column, index)}>
                                <h3 contentEditable onBlur={(e) => handleBlur(column, index, 'title', e)}>{task.title}</h3>
                                <p contentEditable onBlur={(e) => handleBlur(column, index, 'description', e)}>{task.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClickingKanbanBoard;