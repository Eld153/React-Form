import { useState } from 'react'
import addTasks from './addTasks'
import addForm from './addForm'

function App() {
    
  const [taskItem, setTask] = useState([])
  
  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36),
        task: userInput,
        complete: false
      }
      setTask([...taskItem, newItem])
    }
  }
 
  const deleteTask = (id) => {
      setTask([...taskItem.filter((task) => task.id !== id)])
  }

  const clickStrikeout = (id) => {
      setTask([
        ...taskItem.map((task) => 
        task.id === id ? {...task, complete: !task.complete} : {...task}
        )
      ])
  }

  return (
    <div className="App">
      <header>
        <h1>Task: {taskItem.length}</h1>
      </header>
      <addForm addTask={addTask}/>
      {taskItem.map((task) => {
        return (
          <addTasks
            task={task}
            key={task.id}
            clickStrikeout={clickStrikeout}
            deleteTask={deleteTask}
          />
        )
      })}
    </div>
  );
}

export default App
