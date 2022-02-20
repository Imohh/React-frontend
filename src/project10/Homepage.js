import React from 'react'
import {useGlobalContext} from './context'

const Homepage = () => {
    const {openSidebar,openModal} = useGlobalContext()

    return (
        <>
            <main>
                <button onClick={openSidebar}>Sidebar</button>
                <button onClick={openModal}>Show Modal</button>
            </main>
        </>
    )
}

export default Homepage