// import { useState } from 'react'
import AddTask from './AddTask'

const Header = () => {

const onSubmit = () => {

}

    return(
        <div>
            <h1>Task Tracker</h1>
            <button>Add</button>
            <AddTask
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default Header