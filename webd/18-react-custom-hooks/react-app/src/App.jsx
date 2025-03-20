import "./App.css";
import Counter from "./components/Counter";
import DebouncingInputValue from "./components/DebouncingInputValue";
import DebouncingRequests from "./components/DebouncingRequests";
import Post from "./components/Post";
import PreviousValue from "./components/PreviousValue";

function App() {


  return (
    <>
      <Counter /> {/* each counter has its own state. */}
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Post/>
      <PreviousValue/>
      <DebouncingRequests/>
      <DebouncingInputValue/>
    </>
  );
}

export default App;
