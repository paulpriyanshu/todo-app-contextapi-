import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './context/TodoContext'
import { TodoForm, TodoItems } from './components'


function App() {
  const [todos,settodos]=useState([])

  const addtodo=(data)=>{
    settodos((prev)=>[{id:Date.now(),...data},...prev])
  }
  const updatetodo=(id,data)=>{
    settodos((prev)=>prev.map( data =>(data.id)===id? data:prev))
  } 
  const deletetodo=(id)=>{
    settodos(prev=>(prev.filter((prev)=>prev.id!==id)))
  }
  const togglecomplete=(id)=>{
    settodos(prev=>(prev.map((prevtodo)=>prevtodo.id===id?{...prevtodo,completed:!prevtodo.completed}:prevtodo)))
  }
  useEffect(()=>{
    const todos=JSON.parse(JSON.stringify(localStorage.getItem("todos")))
    if(todos && todos.length>0){
      settodos[todos]
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))                                                                                                                                         
  },[todos])
  return (
    <TodoContextProvider value={{todos,addtodo,updatetodo,deletetodo,togglecomplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        { todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItems todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>   
    </TodoContextProvider>
  )
}

export default App
