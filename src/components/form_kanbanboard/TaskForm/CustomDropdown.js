import { useState } from 'react';
import './CustomDropdown.css';

const CustomDropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

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
                {selectedOption ? selectedOption.label : 'Select Status'}
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

export default CustomDropdown;