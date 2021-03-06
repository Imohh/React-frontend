import { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    if(list) {
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return []
    }
}

const Home = () => {
    //USESTATE FOR INPUTING NAME
    const [name, setName] = useState('')
    // USESTATE FOR DISPLAYING THE NAMES
    const [list, setList] = useState(getLocalStorage())
    // USESTATE FOR EDITING NAMES
    const [isEditing, setIsEditing] = useState(false)
    // USESTATE FOR GIVING EDITING NAME AN ID
    const [editID, setEditID] = useState(null)
    //USESTATE FOR DISPLAYING ALERT
    const [alert, setAlert] = useState({ 
        show: false, 
        msg: '', 
        type: '' 
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            // show alert is user submits form without inputing a name
            setAlert({show:true,msg:'please enter value', type: 'danger'})
        } else if (name && isEditing) {
            // IF THE USER CLICKES ON THE EDIT BUTTON
            setList(
                list.map((item) => {
                    if(item.id === editID){
                        return {...item, title: name}
                    }
                    return item
                })
            )
            // when the use is done editing
            setName('')
            setEditID(null)
            setIsEditing(false)
        } else {
            const newItem = {id: new Date().getTime().toString(), title:name}
        setList([...list, newItem])
        }
        // when the user is done inputing a name
        setName('')
    }

    // delete each name from the project
    const deleteItem = (id) => {
        setList(list.filter((item) => item.id !== id))
    }

    // edit items on the project
    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id)
        setIsEditing(true)
        setEditID(id)
        setName(specificItem.title)
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} />}
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button>{isEditing ? 'Edit' : 'Add'}</button>
            </form>

            <List 
                deleteItem={deleteItem} 
                items={list} 
                editItem={editItem}
            />
            {list.length> 0 && (<button onClick={()=> setList([])}>Clear All</button>)}
        </>
    )
}

export default Home