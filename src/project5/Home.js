import {useState} from 'react'
import data from './data'
import Menu from './Menu'
import Category from './Category'

const Home = () => {
    const allCategory = new Set(data.map((item) => item.category))
    const [displayData, setDisplayData] = useState(data)

    const filterItems = (category) => {
        if (category === 'all') {
            setDisplayData(data)
            return
        }
        const newItems = data.filter((item) => item.category === category)
        setDisplayData(newItems)
    }
    
    return (
        <>
            <Category 
                displayData={displayData} 
                allCategory={allCategory} 
                filterItems={filterItems}
            />
            <Menu displayData={displayData} />
            
        </>
    )
}

export default Home