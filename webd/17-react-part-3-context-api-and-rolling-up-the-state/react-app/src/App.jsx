// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [isLightOn, setIsLightOn] = useState(true) 

//   return (
//     <div>
//       <Light isLightOn={isLightOn} setIsLightOn={setIsLightOn}/>
//     </div>
//   )
// }

// function Light(props) {
//   // prop drilling 
//   // just passing the props further to the children components without actually using them. 
//   return (
//     <div>
//       {/* props ==> arguments to the components*/}
//       <LightBulb isLightOn={props.isLightOn} />
//       <LightSwitch setIsLightOn={props.setIsLightOn} />
//     </div>
//   )
// }

// function LightBulb(props) {
//   // const [bulbOn, setBulbOn] = useState(true) // rolling the state up to the Lowest common ancestor (LCA) and passing them as props to the children.
//   return (
//     <div>
//       {props.isLightOn ? "bulb is on" : "bulb is off"}
//     </div>
//   )
// }

// function LightSwitch(props) {
//   return <div>
//     <button onClick={() => props.setIsLightOn(b => !b)}>Toggle the bulb</button>
//   </div>
// }

// export default App


// USING CONTEXT API
import { createContext, useContext, useState } from 'react'
import './App.css'

const BulbContext = createContext() // ---> creating the context.

// creating a context providing wrapper component
function BulbProvider({ children }) {
  const [isLightOn, setIsLightOn] = useState(true)
  const contextObject = {
    isLightOn,
    setIsLightOn
  }
  /* Context Provider provides the context value to all the descendants of the component it wrapped. */
  return (
    <BulbContext.Provider value={contextObject}>
      {children}
    </BulbContext.Provider>
  )
}

function App() {
  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
    </div>
  )
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  )
}

function LightBulb() {
  // consuming the context using useContext hook
  // useContext returns an object
  // hence, destructuring the object.
  const { isLightOn } = useContext(BulbContext)
  return (
    <div>
      {isLightOn ? "bulb is on" : "bulb is off"}
    </div>
  )
}

function LightSwitch() {
  const { setIsLightOn } = useContext(BulbContext)
  return <div>
    <button onClick={() => setIsLightOn(b => !b)}>Toggle the bulb</button>
  </div>
}

export default App
