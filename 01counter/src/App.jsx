import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function useCounter(intialValue) {
  let [counter, setCounter] = useState(intialValue)

  const addValue = () => {
    counter = counter + 1
    if (counter <= 20)
      setCounter(counter)
    else {
      counter = counter - 1;
    }
  }

  useEffect(() => {
    console.log("Counter Updated", counter);

  }, [counter])

  const removeValue = () => {
    counter = counter - 1
    if (counter >= 0)
      setCounter(counter)
    else {
      counter = counter + 1;
    }
  }




  return { counter, addValue, removeValue }
}

function CounterComponent() {
  const { counter, addValue, removeValue } = useCounter(15)

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button
        onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button
        onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )







  /*
    let [counter, setCounter] = useState(15)
    const removeVlue = () => {
      counter = counter - 1;
  
      console.log(counter);
      if (counter >= 0)
        setCounter(counter)
      else {
        counter = counter + 1;
      }
  
    }
    const addValue = () => {
      // counter=counter+1;
      // console.log("value added",Math.random());
      counter = counter + 1
      console.log(counter);
  
      if (counter <= 20)
        setCounter(counter)
      else {
        counter = counter - 1;
      }
    }
    return (
      
      <>
         <h1>Chai with Biscuit | Satya Prakash Sahu</h1>
         <h2>Counter Value: {counter}</h2>
         <button
          onClick={addValue}>Add Value: {counter}</button>
        <br />
        <button
          onClick={removeVlue}>Remove Value: {counter}</button>
      </>
    )
      */





}

export default CounterComponent
