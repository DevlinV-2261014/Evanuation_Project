import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav/Nav';
import ClickingKanbanBoard from './components/clicking_kanbanboard/clicking_kanbanboard';
import DndKanbanBoard from './components/dnd_kanbanboard/dnd_kanbanboard';
import FormKanbanBoard from './components/form_kanbanboard/FormKanbanBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/clicking_kanbanboard" />} />

        <Route path="/clicking_kanbanboard" element={
          <div className="full">
          <Nav haveTaskForm={false} />
          <ClickingKanbanBoard />
        </div>
        } />
        <Route path="/dnd_kanbanboard" element={
          <div className="full">
            <Nav haveTaskForm={false} />
          <DndKanbanBoard />
        </div>
        } />
        
        <Route path="/form_kanbanboard" element={
        <div className="full">
          <FormKanbanBoard />
        </div>
        } />
      </Routes>
    </Router>
  </>
);