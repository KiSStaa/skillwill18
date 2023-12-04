import React, { useState } from 'react';

const TaskItem = ({ task, prevStatus, key }) => {
  const [checked, setChecked] = useState(prevStatus);

  return (
    <div key={key}>
      <h3> {task}</h3>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => setChecked(!checked)}
      />{' '}
      {checked}
    </div>
  );
};

export default TaskItem;