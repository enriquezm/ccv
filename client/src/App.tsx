import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const result = await response.json();
        setMessage(result.message);
      } catch (e) {
        console.error(`error while fetching: ${e}`);
      }

    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Credit Card Validator</h1>
      <p>Message: {message}</p>
    </>
  )
}

export default App
