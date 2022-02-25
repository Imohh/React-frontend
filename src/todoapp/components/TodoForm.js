import { useState } from 'react'
import './style.css'

const TodoForm  =() => {
    const [text, setText] = useState('')

    return (
        <>
            <div className="form-submit-section">
                <div className="container">
                    <h2>todo app</h2>

                    <form onSubmit="">
                        <input
                            type="text"
                            value={text}
                            placeholder="add new todo"
                            onChange={(e) => setText(e.target.value)} />
                    
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default TodoForm