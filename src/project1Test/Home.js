import {useState} from 'react'
import List from './List'

const Home = () => {
    const [people,setPeople] = useState([
        {
            id: 1,
            name: 'William Shakespear',
            age: '32 years',
        },
        {
            id: 2,
            name: 'Lionel Messi',
            age: '38 years',
        },
        {
            id: 3,
            name: 'Ronaldinho Gaucho',
            age: '29 years',
        },
        {
            id: 4,
            name: 'Ayodeji Balogun',
            age: '34 years',
        },
        {
            id: 5,
            name: 'Michael Jackson',
            age: '53 years',
        },
    ])

    return (
        <>
            {people.length > 0 ? <List people={people} /> : 'nothing to display'}
            <button onClick={()=> setPeople([])}>Clear All</button>
        </>
    )
}

export default Home