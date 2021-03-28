import React, { useContext, useState, useEffect } from 'react';
import { TaskManagerContext } from '../context/taskManagerContext';

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskManagerContext
  );

  const [title, setTitle] = useState(' ');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
      setTitle('');
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          onChange={handleChange}
          value={title}
          type='text'
          placeholder='Add Task'
          required
        />
        <div>
          <button type='submit' className='btn'>
            {editItem ? 'Edit Task' : 'Add Task'}
          </button>
          <button onClick={clearList} className='btn'>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
