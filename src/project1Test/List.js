const List = ({people}) => {
    return (
        <>
            {people.map((person) => (
                <artile key={person.id}>
                    <h2>{person.name}</h2>
                    <p>{person.age}</p>
                </artile>
            ))}
        </>
    )
}

export default List