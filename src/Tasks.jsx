import React, { useState } from 'react';

const Tasks = ({ onFormSubmit }) => {
  const [checked, setChecked] = useState(false);
  const [Task, setTask] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(Task, checked);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Enter Task'
          onChange={(e) => setTask(e.target.value)}
        />
        <label className='task'>
          <input
            type='checkbox'
            checked={checked}
            onChange={() => setChecked(!checked)}
          />{' '}
          Mark  completed
        </label>
        <button type='submit' className='but'>Add</button>
      </form>
    </div>
  );
};

export default Tasks;