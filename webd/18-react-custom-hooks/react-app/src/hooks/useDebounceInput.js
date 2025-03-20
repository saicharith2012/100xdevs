import { useEffect, useState } from "react";

export default function useDebounceInput(input, delay) {
    const [debounceValue, setDebounceValue] = useState(input)

    useEffect(() => {
        // starting a new clock
        let handler = setTimeout(() => {
            setDebounceValue(input)
        }, delay)

        return () => {
            clearTimeout(handler) // clearing the clock for each stroke in the input.
        }
    }, [input, delay])


    return debounceValue
}