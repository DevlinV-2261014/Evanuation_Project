import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import KanbanBoard from './components/kanbanboard/kanbanboard';
import Nav from './components/Nav/Nav';
import ClickingKanbanBoard from './components/clicking_kanbanboard/clicking_kanbanboard';
import DndKanbanBoard from './components/dnd_kanbanboard/dnd_kanbanboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/kanbanboard" element={<KanbanBoard />} />
        <Route path="/clicking_kanbanboard" element={<ClickingKanbanBoard />} />
        <Route path="/dnd_kanbanboard" element={<DndKanbanBoard />} />
        <Route path="/" element={<Navigate to="/kanbanboard" />} />
      </Routes>
    </Router>
  </>
);