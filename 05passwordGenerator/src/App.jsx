import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAlllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  let passwordref = useRef(null)

  const copyPasswordToClipBoard = useCallback(()=> {
    passwordref.current?.select()//heighlight the text
    passwordref.current?.setSelectionRange(0,99)//heighlight only between the range   
     
    const selectedText = window.getSelection().toString()//take the text to UI(User Interface)
    // console.log(selectedText);
    
    window.navigator.clipboard.writeText(selectedText)//copy the heighlight text
  },[password]
)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (setCharAllowed) str += "!@#%^&*()_-+=[]{}~`?/<>"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAlllowed, setPassword]
  )

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAlllowed, passwordGenerator]
)

 
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500 ">
        <h1 className='text-white text-center my-3 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black"
            placeholder="Password"
            readOnly
            ref = {passwordref}
          />
          <button
            onClick ={copyPasswordToClipBoard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer '>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-l'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="NumberInput"
              className='cursor-pointer'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
           <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-cente gap-x-lr'>
            <input
              type="checkbox"
              defaultChecked={charAlllowed}
              id="characterInput"
              className='cursor-pointer'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
