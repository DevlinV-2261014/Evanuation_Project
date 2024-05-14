import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import KanbanBoard from './components/kanbanboard/kanbanboard';
import Nav from './components/Nav/Nav';
import ClickingKanbanBoard from './components/clicking_kanbanboard/clicking_kanbanboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <KanbanBoard />
    <ClickingKanbanBoard />
  </React.StrictMode>
);