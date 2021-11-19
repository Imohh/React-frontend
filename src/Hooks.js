import React, {useState, useEffect} from 'react'
import axios from 'axios'

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


//USEEFFECT START


// END OF USEEFFECT
  const [data, setData] = useState("")

useEffect(() => {
  axios
  .get("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    setData(response.data[0].email);
  });
});


const [resourceType, setResourceType] = useState('posts')
useEffect(() => {
  console.log('render')
})


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


    </div>
  );
}