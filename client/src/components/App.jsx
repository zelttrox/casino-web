// Import files
import './App.css'
// Import librairies
import { useState, useEffect } from 'react'

function App() {
    const [data, setData] = useState('');
    const [jackpot, setJackpot] = useState(0);

    // Get the data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api')
                setData(await response.json())
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    setInterval(() => {
      setJackpot(jackpot+1)
    }, 2000);

  return (
    <>
    <p> Casino web </p>
    <p> Credits: {data.credits} </p>
    <p> Jackpot: {jackpot} </p>
    </>
  )
}

export default App
