import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat text-white"
      style= {{
        backgroundColor: 'black' 
      }}
   >
    
    <div>
    <AddTodo />

    <Todos />
    </div>
    

   </div>
    </>
  )
}

export default App
