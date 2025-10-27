// import React from 'react'
import React, {useState} from 'react'

// updater function = A function passed as an arguument to saeState() usually
// eg setYear(y => y + 1). updater function allows for safe
// updates based on the previous state used with multiple states and asynchronous functions.
// it is good practice to use updater function

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count + 3);

    // takes the pending state to calculate the next stage
    // react puts your updater function in a queue(waiting in line)
    // during the next render, it will call them in the same order

        setCount(c => c +1);
        setCount(c => c +1);
        setCount(c => c +1);
    }
    const decrement = () => {
        // setCount(count - 1)

        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0)
    }


  return (
    <>
        <div className="count-display"> 
            <p className='count-display'>{count}</p>
            <button className='count-button' onClick={decrement}>decrement</button>
            <button className='count-button' onClick={reset}>reset</button>
            <button className='count-button' onClick={increment}>increment</button>
        </div>
    </>
  )
}

export default Counter
