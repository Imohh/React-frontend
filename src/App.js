// import React, { useState } from 'react';
// import Header from "./components/Header";
// import Tasks from "./components/Tasks";
// import AddTask from "./components/AddTask";
//  import Home from "./test/Home"
import Home from './project5/Home'

 const App = () => {
  // const [change, setChange] = useState(true)

  // const handleChange = () => {
  //   setChange(!change)
  // }
  // const [showAddTask, setShowAddTask] = useState(false)

  // const[tasks ,setTasks] = useState([
  //   {
  //       id: 1,
  //       text: 'Hello World',
  //       day: 'Feb 5th at 2:30pm',
  //       reminder: false,
  //   },
  //   {
  //       id: 2,
  //       text: 'Starboy Wizkid',
  //       day: 'Sep 18th at 7:30pm',
  //       reminder: false,
  //   },
  //   {
  //       id: 3,
  //       text: 'Come Home',
  //       day: 'Jun 27th at 3:20am',
  //       reminder: false,
  //   },
  // ])

//ADD TASK
// const addTask = (task) => {
//   const id = Math.floor(Math.random() * 10000) + 1
//   const newTask = {id, ...task}
//   setTasks([...tasks, newTask])
// }

// //DELETE TASK
// const deleteTask = (id) => {
//   setTasks(tasks.filter((task) => task.id !== id))
// }

// //TOGGLE REMINDER
// const toggleReminder = (id) => {
//   setTasks((task) => task.id === id ? {...task, reminder: !task.reminder } : task)  
// }

  return (
    <div className="container">

      {/* <h1>This is counter app</h1>*/}
      

      {/* <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) 
      : 
      ("There is nothing to display")} */}
      {/* <Home /> */}

      {/* <div onDoubleClick={handleChange}>
        {change ? "hello" : "heyo"}
      </div> */}

      <Home />

   </div>
  )
}

export default App