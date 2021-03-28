import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

//initialize context api
export const TaskManagerContext = createContext();

//global state
const TaskManagerContextProvider = (props) => {
  //get data from local storage using getItem
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(initialState);

  const [editItem, setEditItem] = useState(null);

  //to save data in Local storage use setItem()
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  //add Task
  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  //remove task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //clear all
  const clearList = () => {
    setTasks([]);
  };

  //to find and edit item
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);

    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTask = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    setTasks(newTask);
    setEditItem('');
  };

  //set up context provider
  return (
    <TaskManagerContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editItem,
        editTask,
      }}
    >
      {props.children}
    </TaskManagerContext.Provider>
  );
};

export default TaskManagerContextProvider;
