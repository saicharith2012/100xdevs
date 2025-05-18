import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket>();
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage() {
    if (!socket) {
      return;
    }

    socket.send(inputRef.current?.value || "ping");
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (e) => {
      console.log(e.data);
    };
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message..."></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
