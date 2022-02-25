import './style.css'

const TodoList = ({ items, deleteItem, editItem }) => {
    return(
        <>
            {items.map((item) => (
                <article className="article" key={item.id}>
                    <p className="">{item.title}</p>
                    <div className="buttons-div">
                        <button onClick={() => editItem(item.id)}>Edit</button>
                        <button className="deleteItem" onClick={() => deleteItem(item.id)}>Delete</button>
                    </div>
                </article>
            ))}
        </>
    )
}

export default TodoList