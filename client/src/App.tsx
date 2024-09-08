import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [input, setInput] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // todo: encrypt number before sending off to api
        body: JSON.stringify({ number: input }),
      });

      const result = await response.json();

      if (response.status === 400) {
        return setMessage(result.message);
      };

      setMessage('Valid card number!');
    } catch (e) {
      console.error(`error while fetching: ${e}`);
    }
  };

  return (
    <>
      <h1>Credit Card Validator</h1>
      <input value={input} onChange={(e) => setInput(e.target.value) } className='inputField' placeholder='Enter credit card number' />
      <button className='validateButton' onClick={handleClick}>Validate</button>
      { message && <p>{ message }</p> }
    </>
  )
}

export default App
