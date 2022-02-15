import { useState } from 'react'
import data from './data'

const Home = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        let amount = parseInt(count)

        if(count <= 0) {
            amount = 1
        }
        if(count > 8) {
            amount =8
        }

        setText(data.slice(0,amount))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    name="amount"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <button type="submit">Generate</button>
            </form>
            {text.map((item) => {
                return <p>{item}</p>
            })}

        </>
    )
}

export default Home