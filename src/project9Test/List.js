const List = ({lists, onDelete}) => {
     
    return (
        <>
            {lists.map((list) => (
                <article key={list.id}>
                    <p>{list.title}</p>
                    <button onClick={() => onDelete(list.id)}>delete</button>
                </article>
            ))}
        </>
    )
}

export default List