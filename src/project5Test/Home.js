import { useState } from 'react'
import Menu from './Menu'
import data from './data'
import Category from './Category'

const Home = () => {
    const allCategory = new Set(data.map((item) => item.category))
    const [content, setContent] = useState(data)
    const filterItems = (category) => {
        if(category === 'all') {
            setContent(data)
            return
        }

        const newItems = data.filter((item) => item.category === category)
        setContent(newItems)
    }

    return (
        <>
            <Category 
                filterItems={filterItems}
                content={content}
                allCategory={allCategory}
            />
            <Menu content={content}/>
        </>
    )
}

export default Home