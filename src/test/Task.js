import image from "../images/shopping-bag.png"
import './style.css'

const Task = ({ task, onDelete }) => {
    // const onDelete = () => {
    //     console.log('click')
    // }

    return (
        <div className="task">
            <h3>{task.name}</h3>
            <img src={image} 
            alt="" 
            width={20} 
            onClick={()=> onDelete(task.id)}
            style={{cursor: 'pointer'}}
            />
            <p>{task.date}</p>
        </div>
    )
}

export default Task