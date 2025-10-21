import React from 'react'

const Todo = (props) => {
  return (
    <div className='bg-cyan-300 w-[100%] rounded-md p-2 my-1 flex items-center justify-between'>
      <div className='flex items-center'>
        <div className='mr-4 ml-2'>
          <input type="checkbox" onChange={props.handleCheck} checked={props.isDone} />
        </div>
        <div className={`text-justify ${props.isDone && 'line-through'}`}>
          {props.text}
        </div>
      </div>
      <div className='flex flex-col mr-2 ml-4 gap-2'>
        <button className="material-symbols-outlined" onClick={props.handleEdit}>
          edit
        </button>
        <button className="material-symbols-outlined" onClick={props.handleDelete}>
          delete
        </button>
      </div>
    </div>
  )
}

export default Todo