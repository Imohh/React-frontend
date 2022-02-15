import Tour from './Tour'

const Tours = ({tours,onDelete}) => {
    return (
        <>
            {tours.map((tour) => (
                <Tour key={tour.id} {...tour} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Tours