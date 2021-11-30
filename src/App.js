import React from 'react'
// import MaterialUi from './MaterialUi'
// import Crash from  './Crash'
import TodoForm from  './components/TodoForm'

import Nav from './Nav'
// import Crash from './Crash'
import Hooks from './Hooks'

function App() {

//   const tasks = [
//     {
//         id: 1,
//         name: 'Imoh',
//         age: 24,
//         color: 'red',
//     },
//     {
//         id: 2,
//         name: 'Precious',
//         age: 24,
//         color: 'blue',
//     },
//     {
//         id: 3,
//         name: 'Starboy',
//         age: 24,
//         color: 'brown',
//     },
// ]

 


  


  return (
    <div>
      <Nav/>
      <TodoForm />
      {/* <Crash tasks={tasks} /> */}

      <Hooks />

    </div>
  );
}



export default App