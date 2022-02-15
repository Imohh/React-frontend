import { useState } from 'react'
import Question from './Question'
import data from './data'

const Home = () => {
    const [questions, setQuestions] = useState(data)

    return (
        <>
        {questions.map((question) => (
            <Question {...question}/>
        ))}
        </>
    )
}

export default Home