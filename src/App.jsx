import { useState, useRef } from 'react'
import './App.css'
import Todo from './components/Todo.jsx'

function App() {

  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])

  // this function is used in the funtions: 
  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  function handleText(e) {
    setText(e.target.value)
  }

  function handleSubmit() {
    if (text != "")
      setTodos(prev => [...prev, { text: text, isDone: false }])
    console.log(todos);
    setText("")
    saveToLocalStorage()
  }

  function handleCheck(idx) {
    setTodos(todos.map((todo, i) =>
      i === idx ? { ...todo, isDone: !todo.isDone } : todo
    ))
    saveToLocalStorage()
  }

  function handleDelete(idx) {
    setTodos(prev => prev.filter((_, i) => i !== idx));
    saveToLocalStorage()
  }

  function handleEdit(idx) {
    let tempTodos = [...todos];
    for (let i = 0; i < tempTodos.length; i++)
      if (i === idx)
        setText(tempTodos[i].text)
    setTodos(prev => prev.filter((_, i) => i !== idx));
    saveToLocalStorage()
  }

  return (
    <>
      <div className='flex justify-around h-[100vh]'>
        <div className="container w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%] bg-cyan-100 my-4 shadow-md rounded-lg flex flex-col items-center p-4 overflow-y-auto">
          <div className='text-3xl my-5'>
            TO-DO APP
          </div>
          <div className='m-3 flex gap-2 w-[80%]'>
            <input type="text" placeholder='Enter a todo...' className="rounded-full px-3 py-1 w-full" value={text} onChange={handleText} onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit() }} />
            <button className='bg-green-500 rounded-full px-3' onClick={handleSubmit}>Enter</button>
          </div>

          {todos.map((t, i) => (
            <Todo
              key={i}
              text={t.text}
              isDone={t.isDone}
              todos={todos}
              setTodos={setTodos}
              handleCheck={() => handleCheck(i)}
              handleDelete={() => handleDelete(i)}
              handleEdit={() => handleEdit(i)} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App