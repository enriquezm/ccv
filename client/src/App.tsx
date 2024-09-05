import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: '1234' }),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = await response.json();
      setMessage(result.message);
    } catch (e) {
      console.error(`error while fetching: ${e}`);
    }
  };

  return (
    <>
      <h1>Credit Card Validator</h1>
      <input className='inputField' placeholder='Enter credit card number' />
      <button className='validateButton' onClick={handleClick}>Validate</button>
      { message && <p>{ message }</p> }
    </>
  )
}

export default App
