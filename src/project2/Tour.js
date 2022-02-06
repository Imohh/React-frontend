import React, {useState} from 'react'
import './style.css'

const Tour = ({name,id,price,detail,deleteTour}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <div className="tours">
            <h2>{name}</h2>
            <h2>{price}</h2>
            <p>{readMore ? detail : `${detail.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'show more'}
            </button>
            </p>
            <button onClick={() => deleteTour(id)}>Clear Tour</button>
        </div>
    )
}

export default Tour