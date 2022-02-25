import './style.css'

const TodoList = ({ items, deleteItem, editItem }) => {
    return(
        <>
            {items.map((item) => (
                <article key={item.id}>
                    <p>{item.title}</p>
                    <div>
                        <button onClick={() => editItem(item.id)}>Edit</button>
                        <button className="deleteItem" onClick={() => deleteItem(item.id)}>Delete</button>
                    </div>
                </article>
            ))}
        </>
    )
}

export default TodoList