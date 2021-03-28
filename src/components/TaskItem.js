import React, { useContext } from 'react';
import { TaskManagerContext } from '../context/taskManagerContext';

const TaskItem = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskManagerContext);

  return (
    <li className='list-item'>
      <span>{task.title}</span>
      <div>
        <button
          onClick={() => removeTask(task.id)}
          className='task-btn btn-delete'
        >
          <i className='fas fa-trash-alt'></i>
        </button>

        <button onClick={() => findItem(task.id)} className='task-btn btn-edit'>
          <i className='fas fa-pen'></i>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
