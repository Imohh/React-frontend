const List = ({birthdays}) => {
    return (
        <>
            {birthdays.map((birthday) => (
                <article key={birthday.id}>
                    <h2>{birthday.name}</h2>
                    <p>{birthday.age}</p>
                </article>
            ))}
        </>
    )
}

export default List