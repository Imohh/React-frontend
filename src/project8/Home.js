import data from './data'
import { useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        let amount = parseInt(count)
        if (count <= 0) {
            amount = 1
        }
        if (count >= 8) {
            amount = 8
        }
        setText(data.slice(0,amount))
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>Paragraph:</p>
                <input 
                    type="number" 
                    name="amount" 
                    value={count}
                    onChange={(e)=> setCount(e.target.value) }/>
                <button>Generate</button>
            </form>

            <article>
                {text.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </article>
        </>
    )
}

export default Home