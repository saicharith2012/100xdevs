import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Class12Program() {
  const navigate = useNavigate()

  // navigating to the home page after 5s of mounting this page.
  useEffect(() => {
    setTimeout(() => navigate("/"), 5000)
  }, []) 

  return (
    <div>
      NEET programs for Class 12th
    </div>
  )
}