const initialData = {
    tasks: {
        'task-1': { id: 'task-1', title: 'Task 1', description: 'Description 1' },
        'task-2': { id: 'task-2', title: 'Task 2', description: 'Description 2' },
        'task-3': { id: 'task-3', title: 'Task 3', description: 'Description 3' },
        'task-4': { id: 'task-4', title: 'Task 4', description: 'Description 4' },
        'task-5': { id: 'task-5', title: 'Task 5', description: 'Description 5' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Backlog',
            taskIds: ['task-1', 'task-2'],
        },
        'column-2': {
            id: 'column-2',
            title: 'To Do',
            taskIds: ['task-3'],
        },
        'column-3': {
            id: 'column-3',
            title: 'Doing',
            taskIds: [],
        },
        'column-4': {
            id: 'column-4',
            title: 'Feedback',
            taskIds: ['task-5'],
        },
        'column-5': {
            id: 'column-5',
            title: 'Done',
            taskIds: ['task-4'],
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5']
}

export default initialData;