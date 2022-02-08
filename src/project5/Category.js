const Category = ({allCategory, displayData, filteritems }) => {
    return (
        <>
            <button
            onClick={() => filteritems('breakfast')}>
                breakfast
            </button>
            
        </>
    )
}

export default Category