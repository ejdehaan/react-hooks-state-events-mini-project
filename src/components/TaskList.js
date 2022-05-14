import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  
  const tasksList = tasks.map((task) => (
    <Task
      text={task.text}
      category={task.categoy}
      key={task.text}
    />
  ))
    
  
  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList;
