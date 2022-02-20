import Tour from './Tour'

const Tours = ({people,onDelete}) => {
    return (
        <>
            {people.map((item) => (
                <Tour key={item.id} {...item} onDelete={onDelete} />
            ))}
            
        </>
    )
}

export default Tours