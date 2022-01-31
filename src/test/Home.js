import { useState } from 'react'
import Tasks from './Tasks'


const Home = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "Imoh Precious",
            date: "2nd Feb 2021",
            reminder:false
        },
        {
            id: 2,
            name: "Starboy Wizzy",
            date: "15th Dec 2021",
            reminder:false
        },
        {
            id: 3,
            name: "Ayodeji Balogun",
            date: "18th Mar 2021",
            reminder:false
        },
    ])

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <div>
            
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> 
            :
            "no item to show"}
            
        </div>
    )
}



export default Home