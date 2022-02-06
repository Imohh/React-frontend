const List = ({people}) => {
 return (
     <>
        {people.map((person) => {
        const {id, age, name} = person
        return (
            <article key={id}>
                <h3>{name}</h3>                
                <p>{age} years</p>
            </article>
        )    
        })}
     </>
 )
}

export default List