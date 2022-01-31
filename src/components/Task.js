import shopping from '../images/shopping-bag.png'
import './style.css'


const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className="task" onClick={() => onToggle(task.id)}>
            <h3 className="header-3">{task.text}</h3>
            <img
             src={shopping} 
             alt="" width={20}
             style={{cursor: 'pointer'}}
             onClick={() => onDelete(task.id)}
            />
            <p>{task.day}</p>
        </div>
    )
}

export default Task