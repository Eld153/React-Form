import { useState } from 'react'

function addForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const textEntry = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const addSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    
    const clickKey = (e) => {
        if (e.key === 'Enter') {
            addSubmit(e)
        }
    }

    return (
        <form onSubmit={addSubmit}>
            <input
                value={userInput}
                type='text'
                onChange={textEntry}
                onKeyDown={clickKey}
                placeholder='add task'
            />
            <button>Save</button>
        </form>
    )
}

export default addForm