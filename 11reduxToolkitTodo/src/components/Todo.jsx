import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo} from "../features/todo/todoSlice";




function Todos() {
    
    //useSelector((state) => state.todo.todos)
const todos = useSelector(state => state.todos)
//   todos.map((todo) => console.log(todo.text)
//   )

    
const dispatch = useDispatch()



//state to track which todo is being edited
const [editId, setEditId] = useState(null)
const [newText, setNewText] = useState("")

    return  (
    <>
    <div className="bg-red-600 p-2">Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
        <li
        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
        key={todo.id}

    >
        {
        
            editId === todo.id ? (
                <input
                className="text-black p-1 rounded"
                value={newText}
                
                
                onChange={(e) => {
                    setNewText(e.target.value)
                    // console.log(newText);
                    
                }}
                
                
            />
        ) : (
       
            <div className="text-white">{todo.text}</div>
        )}
        
         <div>
           {editId === todo.id ? (
                                // Save button
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-green-500 hover:bg-green-600 shrink-0"
            onClick={() => {
                // console.log(todo.id);
                
                dispatch(updateTodo({id: todo.id,text: newText }));
                setEditId(null);
            }}
        >
            ✅
        </button>
    ) : (
        // Edit button
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => {
                // console.log(todo.id);
                
                setEditId(todo.id);
                setNewText(todo.text);
                
                
            }}
        >
            ✏️
        </button>
    )}


        <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(removeTodo(todo.id))}
    >
        ❌
    </button>
           </div>
            </li>
        ))}
    </ul>
    </>
    )
}

export default Todos