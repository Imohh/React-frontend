import Tour from './Tour'

const Tours = ({tours, deleteTour}) => {
    return (
        <>
            {tours.map((tour) => (
                <Tour key={tour.id} {...tour} deleteTour={deleteTour}/>
            ))}
        </>
    )
}

export default Tours