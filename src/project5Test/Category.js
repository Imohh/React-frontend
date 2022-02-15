const Category = ({filterItems}) => {
    return (
        <>
            <button onClick={() => filterItems('all')}>All</button>
            <button onClick={() => filterItems('breakfast')}>BreakFast</button>
            <button onClick={() => filterItems('lunch')}>Lunch</button>
            <button onClick={() => filterItems('dinner')}>Dinner</button>

        </>
    )
}

export default Category