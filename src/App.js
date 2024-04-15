import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <div className=' bg-richblack-900 h-screen mt-0'>
        <div className='pt-24'>
          <div className='flex flex-col items-center mx-auto bg-white w-96 min-h-96'>
            <div className=' bg-slate-700 w-full h-10'>
              <h1 className='text-2xl font-bold text-white text-center'>React To-Do Application</h1>
              </div>
            <TaskInput />
            <TaskList />
          </div>
          
        </div>
        
      </div>
      
    </Provider>
  );
}

export default App;
