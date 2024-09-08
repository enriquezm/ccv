import CreditCardValidatorForm from './components/CreditCardValidatorForm'
import styled from 'styled-components'
import './App.css'

const Heading1 = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
`;

function App() {
  return (
    <>
      <Heading1>Credit Card Validator</Heading1>
      <CreditCardValidatorForm />
    </>
  )
}

export default App
