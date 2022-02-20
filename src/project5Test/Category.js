const Category = ({filterItems})=> {
    return (
        <>
            <button onClick={() => filterItems('breakfast')}>BreakFast</button>
            <button onClick={() => filterItems('lunch')}>BreakFast</button>
            <button onClick={() => filterItems('breakfast')}>BreakFast</button>
        
        </>
    )
}

export default Category