import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Component mounted or count updated.")
    }, [count])

    useEffect(() => {
        console.log("Component mounted.")

        return () => {
            console.log("Component will unmount.")
        }
    }, [])


    return (
        <>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </>
    )
}

export default Counter