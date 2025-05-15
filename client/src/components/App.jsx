// Import files
import './App.css'
// Import librairies
import { useState, useEffect } from 'react'



function App() {
  console.log("rendering")

  // Initialize hooks
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    async function GetAPI() {
      try {
        const response = await fetch('/api')
        setData(response.json())
      }
      catch (error) {
        console.error("[React]", error)
      }
      finally {
        setLoading(false)
      }
    }
    GetAPI()
  }, [])

  console.log(data)

  return (
    <>
    {console.log("heifuh")}
    <p> Casino web </p>
    <p> Credits: {data.credits} </p>
    </>
  )
}

export default App
