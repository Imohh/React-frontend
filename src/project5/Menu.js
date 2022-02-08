

const Menu = ({displayData}) => {
    return (
        <>
            {displayData.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            ))}
            
        </>
    )
}

export default Menu