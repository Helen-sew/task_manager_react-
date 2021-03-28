import React from 'react';
import TaskManagerContextProvider from './context/taskManagerContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <TaskManagerContextProvider>
      <div className='container'>
        <div className='main'>
          <div>
            <Header />
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskManagerContextProvider>
  );
};

export default App;
