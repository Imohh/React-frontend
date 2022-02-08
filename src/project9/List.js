const List = ({items, deleteItem}) => {
    return(
        <>
            {items.map((item) => (
                <article key={item.id}>
                    <p>{item.title}</p>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </article>
            ))}
        </>
    )
}

export default List