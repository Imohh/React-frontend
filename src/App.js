import React, {useState} from 'react'
//import Nav from './Nav'

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  const [inputValue, setInputValue] = useState("")

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue)
  }

  return (
    <div>
      {/* <Nav/> */}
      <h1>This is the default Page</h1>
      {counter}<br/>
      <button onClick={increment}>Increment</button>
      <br/><br/>
      <input onChange={onChange} placeholder="enter something..." />
      {inputValue}

    </div>
  );
}