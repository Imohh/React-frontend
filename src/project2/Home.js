import React, {useState} from 'react'
// import Loading from './Loading'
import Tours from './Tours'
import data from './data'

// const url ='https://course-api.netlify.app/api/react-tours-project'

const Home = () => {
    const [tours, setTours] = useState(data)

    const deleteTour = (id) => {
        const newTour = tours.filter((tour) => tour.id !== id)
        setTours(newTour)
    }

    return (
        <>
            <h1>This is the Home Page</h1>
            {tours.length > 0 ? <Tours tours={tours} deleteTour={deleteTour} />
            :
            "There is nothing to display"
            }
        </>
    )
}

export default Home