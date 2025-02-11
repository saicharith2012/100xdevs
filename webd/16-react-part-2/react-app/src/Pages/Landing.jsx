import { useEffect, useRef, useState } from "react"

export default function Landing() {
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return <div>
        Welcome to Skillflow.

        <h1>Sign up</h1>
        <input ref={inputRef} type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button onClick={() => inputRef.current.focus()}>Submit</button>
        <Clock />
    </div>
}

function Clock() {
    const [currentCount, setCurrentCount] = useState(1);
    // const [timer, setTimer] = useState(0)
    const timer = useRef()

    function startTimer() {
        const value = setInterval(() => {
            setCurrentCount(c => c + 1)
        }, 1000)

        // setTimer(value) // rerenders unnecessarily even when its not being used on the dom.
        timer.current = value
    }

    function stopTimer() {
        clearInterval(timer.current)
    }

    return (
        <div>
            <div>{currentCount}</div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )


}
