import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './dnd_kanbanboard.css';
import initialData from '../../initdata';
import Column from '../Column/Column';

const DndKanbanBoard = () => {
    const [state, setState] = useState(initialData);

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId == source.droppableId && destination.index == source.index) {
            return;
        }

        const start = state.columns[source.droppableId];
        const finish = state.columns[destination.droppableId];

        // Re-ordering in one column
        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };

            setState(newState);
            return;
        }

        // Moving from one column to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        setState(newState);
    }

    const addTask = () => {
        const newTaskId = `task-${Object.keys(state.tasks).length + 1}`;
        const newTask = {
            id: newTaskId,
            title: `Task ${Object.keys(state.tasks).length + 1}`,
            description: `Description ${Object.keys(state.tasks).length + 1}`
        };

        const updatedTasks = {
            ...state.tasks,
            [newTaskId]: newTask
        };

        const updatedColumns = {
            ...state.columns,
            'column-1': {
                ...state.columns['column-1'],
                taskIds: [...state.columns['column-1'].taskIds, newTaskId]
            }
        };

        setState({
            ...state,
            tasks: updatedTasks,
            columns: updatedColumns
        });
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='kanban-board'>
                {state.columnOrder.map((columnId) => {
                    const column = state.columns[columnId];
                    const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks} addTask={addTask} />;
                })}
            </div>
        </DragDropContext>
    );
};

export default DndKanbanBoard;