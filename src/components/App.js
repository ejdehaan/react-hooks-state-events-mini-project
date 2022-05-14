import {React, useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { logDOM } from "@testing-library/react";
//console.log({ CATEGORIES, TASKS });


function App() {

  // const [selectedCategory, setSelectedCategory] = useState()
  // function handleSelectedCategory() {
  //   console.log("hi")
  // }

  const [submit, setSubmit] = useState("")

  function handleSubmit(e) {
    const newTasks = (setSubmit(e.target.value,...TASKS))
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit} />
      <TaskList tasks={TASKS} />
    </div>
  );
}

export default App;
