import {useState} from 'react'
import List from './List'

const Home = () => {
    const [people, setPeople] = useState([
        {
            id: 1,
            name: 'William Shakespear',
            age: 32,
        },
        {
            id: 2,
            name: 'Lionel Messi',
            age: 29,
        },
        {
            id: 3,
            name: 'Ronaldinho Gaucho',
            age: 31,
        },
        {
            id: 4,
            name: 'Trevor Noah',
            age: 28,
        },
        {
            id: 5,
            name: 'Michael Jackson',
            age: 52,
        },
    ])
    return (
        <>
            <p>{people.length} birthdays today</p>
            {people.length > 0 ? <List people={people}/> : "nothing to show"}
            <button onClick={(id) => setPeople((people.filter) = people.id !== id)}>Clear All</button>
            {/* OR <button onClick={() => setPeople([])}>Clear All</button> */}
        </>
    )
}

export default Home