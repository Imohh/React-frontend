import {useState} from 'react'
import Tours from './Tours'
import data from './data'

const Home = () => {
    const [people,setPeople] = useState(data)
    const deleteItem = (id) => {
        const newTour = people.filter((item) => item.id !== id)
        setPeople(newTour)    
    }

    return (
        <>
            <h2>This is the Home Page</h2>

            <Tours people={people} onDelete={deleteItem} />
        </>
    )
}

export default Home