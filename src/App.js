import React, { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
// import Home from "./test/Home"

 const App = () => {
  const[tasks ,setTasks] = useState([
    {
        id: 1,
        text: 'Hello World',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
    {
        id: 2,
        text: 'Starboy Wizkid',
        day: 'Sep 18th at 7:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Come Home',
        day: 'Jun 27th at 3:20am',
        reminder: false,
    },
])

// DELETE TASK
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// TOGGLE REMINDER
const toggleReminder = (id) => {
  setTasks((task) => task.id === id ? {...task, reminder: !task.reminder } : task)  
}

  return (
    <div className="container">

      {/* <h1>This is counter app</h1>*/}
      

      <Header />
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) 
      : 
      ("There is nothing to display")}
      {/* Test <Home /> */}

   </div>
  )
}

export default App