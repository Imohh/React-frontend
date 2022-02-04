import { useState } from 'react'
import Tasks from './Tasks'
import AddTask from './AddTask'
import Header from './Header'

const Home = () => {
const [showAddTask, setShowAddTask] = useState(false)

const [tasks, setTasks] = useState([
    {
        id: 1,
        name: "return the book",
        date: "2nd January 2021",
        reminder: false
    },
    {
        id: 2,
        name: "Buy the food",
        date: "18th May 2019",
        reminder: true
    },
    {
        id: 3,  
        name: "Lock the car",
        date: "15th February 2020",
        reminder: false
    },
])

const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    // console.log(id)
}

const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
}

    return (
        <div>

            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? 
                <Tasks tasks={tasks} onDelete={deleteTask} />
            :
            "There is no Task to show"
            }

        </div>
    )
}

export default Home