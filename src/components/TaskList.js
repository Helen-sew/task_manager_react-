import React, { useContext } from 'react';
import { TaskManagerContext } from '../context/taskManagerContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useContext(TaskManagerContext);

  return (
    <div>
      {tasks.length ? (
        <ul>
          {tasks.map((task) => {
            return <TaskItem task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className='no-task'> No Task </div>
      )}
    </div>
  );
};

export default TaskList;
