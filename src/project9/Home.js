import { useState } from 'react'
import List from './List'

const Home = () => {
    const [name, setName] = useState('')
    const [list, setList] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editID, setEditID] = useState(null)
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            
        } else if (name && isEditing) {

        } else {
            const newItem = {id: new Date().getTime().toString(), title:name}
        setList([...list, newItem])
        }
        setName('')
        
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button>Add</button>
            </form>

            <List items={list} />
            {list.length> 0 && (<button>Clear All</button>)}
        </>
    )
}

export default Home