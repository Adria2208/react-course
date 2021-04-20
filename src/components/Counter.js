import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor"

function Counter() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState('Yes')
    const [color, setColor] = useState('')

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        setColor(randomcolor())

    }, [count])

    return (
        <div>
            <h1 style={{ color: color }}>{count}</h1>
            <h2>{answer}</h2>
            <button onClick={increment}>Increment!</button>
            <button onClick={decrement}>Decrement!</button>
        </div>
    )
}

export default Counter
