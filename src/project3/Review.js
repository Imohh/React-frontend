import { useState } from 'react'
import people from './data'

const Review = () => {
    const [index, setIndex] = useState(0)
    const {name,job,text} = people[index]


    //TO ENABLE THE SLIDER SHOW MORE ITEMS AFTER EXCEEDING THE TOTAL ITEMS
    // ALSO FOR PREVIOUS ITEMS TO START FROM THE FIRST ITEM
    const checkNumber = (number) => {
        if(number > people.length - 1) {
            return 0
        }
        if (number < 0) {
            return people.length -1
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

    const randPerson = () => {
        //CONVERT RANDOM NUMBER TO A WHOLE NUMBER
        let randomNumber = Math.floor(Math.random() * people.length)

        //ALWAYS SHOW DIFFERENT ITEM
        if(randomNumber === index) {
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    }

    return (
        <>
            <article>
                <h3>{name}</h3>
                <p>{job}</p>
                <p>{text}</p>
                <div>
                    <button onClick={prevPerson}>prev</button>
                    <button onClick={nextPerson}>Next</button>
                </div>
                <br />
                
                <button onClick={randPerson}>Random</button>
            </article>
        </>
    )
}

export default Review