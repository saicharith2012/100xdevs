// import { createContext } from 'react'
// import './App.css'
// import { useContext } from 'react'
// import { useState } from 'react'

// const CounterContext = createContext()

// function CounterContextProvider({ children }) {
//   const [count, setCount] = useState(0)

//   const contextObj = {
//     count, setCount
//   }

//   return (
//     <CounterContext.Provider value={contextObj}>
//       {children}
//     </CounterContext.Provider>
//   )
// }

// function App() {
//   return (
//     <CounterContextProvider>
//       <Increase />
//       <Decrease />
//       <Value />
//     </CounterContextProvider>
//   )
// }

// function Increase() {
//   const { setCount } = useContext(CounterContext)

//   return <button onClick={() => setCount(c => c + 1)}>Increase</button>
// }

// function Decrease() {
//   const { setCount } = useContext(CounterContext)
//   return <button onClick={() => setCount(c => c === 0 ? c : c - 1)}>Decrease</button>
// }

// function Value() {
//   const { count } = useContext(CounterContext)
//   return <div>{"counter: " + count}</div>
// }

// export default App


// In case of using Context API, for every change in count state, even the components that don't use count inside them are re-rendering
// To avoid this, we can use external state management library like recoil.

import React from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const countState = atom({
  key: 'Count', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <Incrase />
        <Decrease />
        <Value />
      </ErrorBoundary>
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(countState);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Incrase() {
  const setCount = useSetRecoilState(countState);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const count = useRecoilValue(countState); // Recoil throwing an error here.
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

// ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ backgroundColor: "papayawhip", borderRadius: "20px", padding: "20px", margin: "20px" }}>
          Something went wrong.
        </div>
      );
    }
    return this.props.children;
  }
}


export default App;