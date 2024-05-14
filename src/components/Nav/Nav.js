import React from 'react';
import logo from '../../logo.svg';
import "./Nav.css";
import TaskForm from '../TaskForm/TaskForm';

function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Company Logo" className="logo" />
                <span className="company-title">Kanban Board</span>
            </div>
            <ul className="navbar-links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                <li>
                    <TaskForm />
                </li>
            </ul>
        </nav>
    );
}

export default Nav;