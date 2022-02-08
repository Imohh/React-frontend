import React, { useState } from 'react'
import SingleQuestion from './Question'
import data from './data'

const Home = () => {
    const [questions, setQuestions] = useState(data)

    return (
        <>
            <h2>These are the questions</h2>
            {questions.map((question) => (
                <SingleQuestion key={question.id} {...question} />
            ))}

        </>
    )
}

export default Home