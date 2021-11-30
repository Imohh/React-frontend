import React, { useState, useEffect, useRef  } from 'react'
import axios from 'axios'
import Button from './Button'

//import Nav from './Nav'

export default function Hooks() {
  

//USESTATE HOOK
const [counter, setCounter] = useState(0)

function increment() {
  setCounter(counter + 1)
}


const [inputValue, setInputValue] = useState("")
function onChange(event) {
  const newValue = event.target.value
  setInputValue(newValue)
}

const [showText, setShowText] = useState(true)
// END OF USESTATE


// START OF USEEFFECT
  const [data, setData] = useState("")

useEffect(() => {
  axios
  .get("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    setData(response.data[0].email);
  });
}); 


const [resourceType, setResourceType] = useState('')
useEffect(() => {
  console.log('render')
})
// END OF USEEFFECT

// START OF USEREF

const inputRef = useRef(null)

const onClick = () => {
  inputRef.current.value = ""
}

// END OF USE REF

// START OF USELAYOUTEFFECT
// It displays before the page loads and is
// faster than the useEffect Hook



//END OF USELAYOUTEFFECT


  return (
    <div>
      {/* <Nav/> */}
      <h1>This is the default Page</h1>
      <br/>


      {/* USESTATE START */}
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>

      <br/><br/>
      <input placeholder="type here..."
      onChange={onChange} />
      <br/>
      <h2>{inputValue}</h2>

      <br/>
      <h1>{counter}</h1>
      <button
      onClick={() => {
      setCounter(counter + 1);
      setShowText(!showText);
        }}
      >Click Here</button>

      {showText && <p>This is a text</p>}
      {/* END OF USESTATE */}

      {/* USE EFFECT API START */}
      <h2>hello world</h2>
      {data}
      
      {/* USE EFFECT START */}
      <br/>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('new shit')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h1>{resourceType}</h1>

      {/* USEREF */}
      <input placeholder="type here"
      ref={inputRef}/>
      <button onClick={onClick}>
        Click Here
      </button>
      <br></br>
      <br></br>

      {/* // IMPERATIVE HANDLE */}
      <button>Button From Parent</button>
      <Button />
      








    </div>
  );
}