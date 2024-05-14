import React from 'react';
import Popup from 'reactjs-popup';
import CustomDropdown from './CustomDropdown';
import { useState } from 'react';
import './TaskForm.css';

const TaskForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');

    function handleSelect(option) {
        setStatus(option.value);
    }

    function handleSubmit(close) {
        console.log('Title: ' + title + '\nDescription: ' + description + '\nStatus: ' + status);
        close();
    }

    const dropDownOptions = [
        {value: 'To Do', label: 'To Do', className: 'dropdownOption'},
        {value: 'Doing', label: 'Doing', className: 'dropdownOption'},
        {value: 'Feedback', label: 'Feedback', className: 'dropdownOption'},
        {value: 'Done', label: 'Done', className: 'dropdownOption'},
    ];

    let selectedItem = dropDownOptions[0];

    return (
    <Popup trigger={<button className='addTaskFormButton'> + Add Task</button>} position="bottom" modal>
        {close => (<div className='modal'>
            <label className='header'> Add Task </label>
            <div className='content'>
                <label className='inputLabel'>Title</label>
                <input className='titleInput' type='text' placeholder='Title' onChange={e => setTitle(e.target.value)} />

                <label className='inputLabel'>Description</label>
                <input className='descriptionInput' type='text' placeholder='Description' onChange={e => setDescription(e.target.value)} />

                <label className='inputLabel'>Status</label>
                <CustomDropdown className='dropdown' options={dropDownOptions} onSelect={handleSelect} value={selectedItem} />
            </div>
            <div className='actions'>
                <button className='submitButton' onClick={() => handleSubmit(close)}> Add Task </button>
            </div>
        </div>
        )}
    </Popup>
    )
};

export default TaskForm;