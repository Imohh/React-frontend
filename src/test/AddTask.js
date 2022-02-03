import {useState} from 'react'
const AddTask = ({tasks, onSubmit}) => {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label>Name:</label>
                <input 
                    type="text"
                    value={text}
                    onChange={handleChange}
                />
                <label>Date:</label>
                <input 
                    type="text"
                />
                <input 
                    type="submit" 
                    value="submit"
                />
            </form>

            <h1>{text}</h1>
        </>
        

    )
}

export default AddTask