function addTasks({ task, clickStrikeout, deleteTask }) {
    return (
        <div key={task.id} className='item-task'>
            <div className={task.complete ? 'item-text strike' : 'item-text'}
                onClick={() => clickStrikeout(task.id)}
            >
                {task}
            </div>
            <div className='item-delete' onClick={() => deleteTask(task.id)}>
                X
            </div>
        </div>
    )
}

export default addTasks