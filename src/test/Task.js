import image from '../images/shopping-bag.png'

const Task = ({task, onDelete}) => {
    return (
        <div>
            <div>
                <h1>{task.name}</h1>
                <p>{task.date}</p>
                <img 
                    src={image} 
                    width={20} 
                    alt=""
                    style={{cursor: 'pointer'}}
                    onClick={() => onDelete(task.id)}
                />
            </div>

        </div>
    )
}

export default Task