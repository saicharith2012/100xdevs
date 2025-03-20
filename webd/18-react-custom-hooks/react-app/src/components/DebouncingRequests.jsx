import React from 'react'
import useDebounceRequest from '../hooks/useDebounceRequest'

export default function DebouncingRequests() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/")
  }

  const debouncedFn = useDebounceRequest(sendDataToBackend)

  return (
    <div>
      <input type='text' onChange={debouncedFn}></input>
    </div>
  )
}
