import React from 'react';
import Popup from 'reactjs-popup';
import Dropdown from 'react-dropdown';
import { useState } from 'react';
import './TaskForm.css';

const CustomDropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-toggle" onClick={handleToggleDropdown}>
                {selectedOption ? selectedOption.label : 'Select'}
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    {options.map(option => (
                        <div
                            key={option.value}
                            className="dropdownOption"
                            onClick={() => handleSelectOption(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const TaskForm = () => {

    function handleSelect(option) {
        console.log(option.value);
    }

    const dropDownOptions = [
        {value: 'todo', label: 'To Do', className: 'dropdownOption'},
        {value: 'doing', label: 'Doing', className: 'dropdownOption'},
        {value: 'feedback', label: 'Feedback', className: 'dropdownOption'},
        {value: 'done', label: 'Done', className: 'dropdownOption'},
    ];

    let selectedItem = dropDownOptions[0];

    return (
    <Popup trigger={<button className='addTaskFormButton'> + Add Task</button>} position="bottom" modal>
        <div className='modal'>
            <label className='header'> Add Task </label>
            <div className='content'>
                <label className='inputLabel'>Title</label>
                <input className='titleInput' type='text' placeholder='Title' />

                <label className='inputLabel'>Description</label>
                <input className='descriptionInput' type='text' placeholder='Description' />

                <label className='inputLabel'>Status</label>
                <CustomDropdown className='dropdown' options={dropDownOptions} onSelect={handleSelect} value={selectedItem} />
            </div>
            <div className='actions'>
                <button className='submitButton'> Add Task </button>
            </div>
        </div>
    </Popup>
    )
};

export default TaskForm;