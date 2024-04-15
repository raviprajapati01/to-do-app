import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () =>{
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className='flex flex-col justify-center align-middle mt-10'>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task"
        className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[380px] p-[12px]'
      />
      <button onClick={handleAddTask} 
      className='bg-slate-700 rounded-[8px] font-medium text-white px-[12px] py-[8px] w-60 ml-16 mt-4'>Add Task</button>
    </div>
  );
};

export default TaskInput;
