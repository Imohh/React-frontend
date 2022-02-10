import { useState } from 'react'
import List from './List'
import Alert from './Alert'

const Home = () => {
    const [text, setText] = useState('')
    const [lists, setLists] = useState([])
    const [alert, setAlert] = useState({show: false, msg: ''})

    const addItems = (e) => {
        e.preventDefault()

        if(!text) {
            setAlert({show:true, msg: 'you need to fill the field'})
        } else{
            setAlert({show:true, msg: 'you successfully added your item'})
            const newValue = {id: new Date().getTime().toString(), title: text}
            setLists([...lists, newValue])
            setText('')
        }

    }

    const deleteItem = (id) => {
        setLists(lists.filter((list) => list.id !== id))
    }

    return (
        <>
            <form onSubmit={addItems}>
                {alert.show && <Alert {...alert}/>}
                <input
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}    
                />
                <button type='submit'>Add</button>
            </form>

            <List onDelete={deleteItem} lists={lists} />
            {lists.length > 0 ? <button onClick={() => setLists([])}>Clear All</button> : 'there are no items to show'}
        </>
    )
}

export default Home