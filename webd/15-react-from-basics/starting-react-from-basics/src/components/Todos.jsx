import { useState, useEffect } from "react"

export default function Todos() {
    const [currentTodo, setCurrentTodo] = useState(1)
    const [tabData, setTabData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos/" + currentTodo)
            .then(async res => {
                const json = await res.json();
                setTabData(json);
                setIsLoading(false)
            })
    }, [currentTodo])

    return (
        <div>

            <div className='todobar' style={{
                height: "58px",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                padding: "5px 10px",
                boxSizing: "border-box",
                backgroundColor: "rgb(241, 241, 233)",
                zIndex: "101",
                borderBottom: "1px solid gray",
            }}>
                <button style={{ fontFamily: "inherit", color: currentTodo === 1 ? "red" : "black" }} onClick={() => setCurrentTodo(1)}>todo1</button>
                <button style={{ fontFamily: "inherit", color: currentTodo === 2 ? "red" : "black" }} onClick={() => setCurrentTodo(2)}>todo2</button>
                <button style={{ fontFamily: "inherit", color: currentTodo === 3 ? "red" : "black" }} onClick={() => setCurrentTodo(3)}>todo3</button>
                <button style={{ fontFamily: "inherit", color: currentTodo === 4 ? "red" : "black" }} onClick={() => setCurrentTodo(4)}>todo4</button>
            </div>

            <div>
                {isLoading ? <p>Loading...</p> : <p>{tabData.title}</p>}
            </div>
        </div>)
}