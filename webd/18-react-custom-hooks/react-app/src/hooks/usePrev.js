import { useEffect, useRef } from "react"

export const usePrev = (value) => {
    // refs let you store a value in a variable, and it does NOT trigger any rerender when the value is changed.
    const ref = useRef() // ref is created only once
    console.log(`1. State updated to ${value}`)
    
    useEffect(()=> {
        ref.current = value
        console.log("4. ref is getting updated with the new value.")
    }, [value])
    
    console.log(`2. returning the current ref ${ref.current}`)
    return ref.current // undefined is returned at the first call.
}

// returns first and effect is called later.
// therefore, before updating the ref, the current value is returned and rendered as the previous value.
// only after all this, the ref is updated with the current value.
