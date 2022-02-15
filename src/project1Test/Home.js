import { useState } from 'react'
import List from './List'

const Home = () => {
    const [birthdays, setBirthdays] = useState([
        {
            id: 1,
            name: 'William Shakespear',
            age: '32 years'
        },
        {
            id: 2,
            name: 'Lionel Messi',
            age: '36 years'
        },
        {
            id: 3,
            name: 'Trevor Noah',
            age: '28 years'
        },
    ])

    return (
        <>  
            
            {birthdays.length > 0 ? <List birthdays={birthdays} /> : 'there are no items to display' }
            <button onClick={() => setBirthdays([])}>Clear all</button>            
            
        </>
    )
}

export default Home