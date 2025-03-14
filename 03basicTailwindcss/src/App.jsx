import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "satya",
    age: 23
  }
  let newArr = [1, 2, 3]

  const handleClickforOne = () => {
    window.location.href = "https://leetcode.com/u/satyasahu43/";
};
  const handleClickforTwo = () => {
    window.location.href = "https://www.linkedin.com/in/satya-prakash-sahu-sps";
};
  return (
    <>
      <h1 className='bg-yellow-400 text-black p-4 rounded-xl' >Chai With Biscuit | Vite Tailwindcss || Satya Prakash Sahu</h1>

      {/* <Card channel = "chai aur code" someObj={myObj} myArr={newArr}/> */}

      <Card username="ChaiWithReact" btnText="click me" onClick = {handleClickforOne} />
      <br />
      <br />
      <Card username="satya" btnText="visit me" onClick={handleClickforTwo}  />




    </>
  )
}

export default App
