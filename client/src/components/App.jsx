// Import files
import './App.css'
// Import librairies
import { useState, useEffect } from 'react'
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});


function App() {
  console.log("rendering")

  // Initialize hooks
  // const [data, setData] = useState({})
  // const [loading, setLoading] = useState(true)

  // useEffect( () => {
  //   async function GetAPI() {
  //     try {
  //       const response = await fetch('/api')
  //       console.log(response)
  //       setData(response.json())
  //     }
  //     catch (error) {
  //       console.error("[React]", error)
  //     }
  //     finally {
  //       setLoading(false)
  //     }
  //   }
  //   GetAPI()
  // }, [])

  const data = api.get("/api")

  console.log(data)

  return (
    <>
    <p> Casino web </p>
    <p> Credits: {data.credits} </p>
    </>
  )
}

export default App
