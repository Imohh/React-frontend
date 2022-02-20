import data from './data'
import Menu from './Menu'
import Category from './Category'

const Home = () => {

    const filterItems = () => {
        
    }

    return (
        <>
            <Category filterItems={filterItems} />
            <Menu data={data}/>
        </>
    )
}

export default Home