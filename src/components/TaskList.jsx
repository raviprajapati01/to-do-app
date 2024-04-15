// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions/taskActions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  // const [showTasks, setShowTasks] = useState(false);

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      {/* <button className='bg-slate-700 rounded-[8px] font-bold px-[12px] py-[8px] mt-6 text-white' onClick={() => setShowTasks(!showTasks)}>
        {showTasks ? 'Hide Tasks' : 'View Tasks'}
      </button> */}
      { (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div className='flex'>
              <div className='w-72 mt-8'>{task.title}</div>
              <button onClick={() => handleDeleteTask(task.id)}
                className='bg-slate-700 rounded-[8px] font-medium text-white px-[12px] py-[8px] mt-6'>
                Delete
              </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
