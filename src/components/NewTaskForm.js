import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit  }) {
  
  const catOptions = categories.filter(category => category !== "All").map(category => (
      (
        <option
        key={category}
        >
        {category}
        </option>)
  ))
  
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={onTaskFormSubmit}/>
      </label>
      <label>
        Category
        <select name="category">
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task" onSubmit={onTaskFormSubmit} />
    </form>
  );
}

export default NewTaskForm;
