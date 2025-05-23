// Import files
import './App.css'
// Import librairies
import { useState, useEffect } from 'react'

function App() {
  console.log("rendering")

    const [data, setData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api')
                const reiceved = await response.json()
                setData(reiceved)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])
    console.log(data.credits)

  return (
    <>
    <p> Casino web </p>
    <p> Credits: {data.credits} </p>
    </>
  )
}

export default App
