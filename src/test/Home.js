import {useState} from 'react'
import Tasks from './Tasks'

const Home = () => {
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

    return (
        <div>
            {tasks.length > 0 ? 
                <Tasks tasks={tasks} onDelete={deleteTask} />
            :
            "There is no Task to show"
            }
        </div>
    )
}

export default Home