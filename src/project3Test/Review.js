import {useState} from 'react'
import people from './data'

const Review = () => {
    const [index, setIndex] = useState(0)
    const {id,name,text,job} = people[index]

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0
        }
        if (number < 0) {
            return people.length - 1
        }
        return number
    }


    const nextPerson = () => {
        setIndex((index) => {
            let newPerson = index + 1
            return checkNumber(newPerson)
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newPerson = index - 1
            return checkNumber(newPerson)
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length)
        if(randomNumber === index) {
            randomNumber = index + 1
        }

        setIndex(checkNumber(randomNumber))
    }

    return (
        <>
            <article>
                <h2>{name}</h2>
                <h3>{job}</h3>
                <p>{text}</p>
                <button onClick={prevPerson}>prev</button>
                <button onClick={nextPerson}>next</button>
            </article>
            <br />

            <button onClick={randomPerson}>random</button>
        </>
    )
}

export default Review