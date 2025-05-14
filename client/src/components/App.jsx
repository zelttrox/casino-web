// Import files
import './App.css'
// Import librairies
import { useState, useEffect } from 'react'

// Initialize hooks
const [data, setData] = useState(0)

function App() {

  async function GetAPI() {
    try {
      const response = await fetch('/api')
      setData(response.json())
    }
    catch (error) {
      console.error("[React]", error)
    }
    console.log(data)
  }

  GetAPI()

  return (
    <>
    <p> Casino web </p>
    <p> Credits: {data.credits} </p>
    </>
  )
}

export default App
