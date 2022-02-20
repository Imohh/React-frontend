const Tour = ({id,name,height,text,onDelete}) => {
    const showLess = () => {
        
    }

    return (
        <>
            <h3>{name}</h3>
            <h4>{height}</h4>
            <p>{text}</p>
            <button onClick={showLess}>Show More</button>
            <button onClick={()=> onDelete(id)}>Clean Tour</button>
        </>
    )
}

export default Tour