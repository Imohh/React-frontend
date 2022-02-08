const Category = ({filterItems }) => {
    return (
        <>
            <button onClick={() => filterItems('all')}>
                All
            </button>

            <button onClick={() => filterItems('breakfast')}>
                breakfast
            </button>

            <button onClick={() => filterItems('lunch')}>
                lunch
            </button>
            
        </>
    )
}

export default Category