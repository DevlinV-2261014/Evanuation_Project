import React from 'react';
import Popup from 'reactjs-popup';
import CustomDropdown from './CustomDropdown';
import { useState } from 'react';
import './MoveTaskForm.css';

const TaskForm = ({task, moveTask}) => {

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState('To Do');

    function handleSelect(option) {
        setStatus(option.value);
    }

    function handleSubmit(close) {
        console.log('Title: ' + title + '\nDescription: ' + description + '\nStatus: ' + status);
        task.title = title;
        task.description = description;
        moveTask(task, status);
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
    <Popup trigger={<button className='moveTaskFormButton'> 
        <div className='formCardDiv'>
            <h3 className='movetitle'>{task.title}</h3>
            <p className='movedescription'>{task.description}</p>
        </div>
    </button>} position="bottom" modal>
        {close => (<div className='movemodal'>
            <label className='moveheader'> Move Task </label>
            <div className='movecontent'>
                <label className='moveinputLabel'>Title</label>
                <input className='movetitleInput' type='text' value={title} placeholder='Title' onChange={e => setTitle(e.target.value)} />

                <label className='moveinputLabel'>Description</label>
                <input className='movedescriptionInput' type='text' value={description} placeholder='Description' onChange={e => setDescription(e.target.value)} />

                <label className='moveinputLabel'>Status</label>
                <CustomDropdown className='movedropdown' options={dropDownOptions} onSelect={handleSelect} value={selectedItem} />
            </div>
            <div className='moveactions'>
                <button className='movesubmitButton' onClick={() => handleSubmit(close)}> Move Task </button>
            </div>
        </div>
        )}
    </Popup>
    )
};

export default TaskForm;