import React from 'react'

function Crash({tasks}) {


    

    // const [click, setClick] = useState(false)

    // const handleClick = () => setClick(!click)


        return (
            <div>
                

                  {/* <button onClick={handleClick}>Click here </button>
                    {click ? <h1>hey you clicked!</h1> : <h1>You did not click</h1>} */}
                
                {tasks.map((task) => (
                    <div key={task.id}>
                        <h1>{task.id}</h1>
                        <h2>{task.name}</h2>
                    </div>
                    
                ))}

            </div>
        )
    }

export default Crash