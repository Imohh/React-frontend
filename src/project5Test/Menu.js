const Menu = ({content}) => {
    return (
        <>
            {content.map((item) => (
                <article key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.detail}</p>
                </article>
            ))}
        </>
    )
}

export default Menu