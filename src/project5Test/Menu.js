const Menu = ({data}) => {
    return (
        <>
            {data.map((item) => (
                <article>
                    <h3>{item.category}</h3>
                </article>
            ))}
        </>
    )
}

export default Menu