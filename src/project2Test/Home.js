import { useState } from 'react'
import Tours from './Tours'
import data from './data'


const Home = () => {
    const [tours, setTours] = useState(data)

    const deleteTour = (id) => {
        setTours(tours.filter((tour) => tour.id !== id))
    }

    return (
        <>
            <Tours tours={tours}
                onDelete={deleteTour}
            />
        </>
    )
}

export default Home