import { useState } from 'react'
import style from './Counter.module.css'

export const Counter = () => {
    const initialValue = 0;
    const [counter, setCounter] = useState<number>(0);
    function handlePlus() {
        //setCounter(counter + 1);
        setCounter((prev) => prev + 1);
        console.log(counter);       
    }
    function handleMinus() {
        setCounter((prev) => prev -1);
    };

    const resetCounter = () => {
        setCounter(initialValue);
    }
  return (
    <div className={style.counterCard}>
        <h2>Counter: {counter}</h2>
        <button type="button" onClick={handleMinus}>-1</button>
        <button type="button" onClick={handlePlus}>+1</button>
        <button type="button" onClick={resetCounter}>Reset</button>
        </div>
  )
}
