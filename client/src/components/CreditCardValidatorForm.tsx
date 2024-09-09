import { useState } from 'react';
import { FormContainer, FormControls, FormInput, FormButton, FormMessage } from './CreditCardValidatorForm.styles';

const CreditCardValidatorForm = () => {
  const [message, setMessage] = useState('');
  const [input, setInput] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const VALIDATION_ENDPOINT = '/api/v1/ccv/validate';

  // enhancement: rate limit button click
  const handleClick = async () => {
    try {
      const response = await fetch(VALIDATION_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // enhancement: encrypt via https
        body: JSON.stringify({ number: input }),
      });

      const result = await response.json();

      if (response.status === 400) {
        setIsError(true);
        setIsSuccess(false);

        return setMessage(result.message);
      };

      setIsError(false);
      setIsSuccess(true);

      setMessage('Valid card number!');
    } catch (e) {
      console.error(`error while fetching: ${e}`);
    }
  };

  return (
    <FormContainer>
      <FormControls>
        <FormInput
          value={input}
          onChange={(e) => setInput(e.target.value) } 
          placeholder='Enter credit card number'
          isError={isError}
          isSuccess={isSuccess}
        />
        <FormButton
          onClick={handleClick}
        >
          Validate
        </FormButton>
      </FormControls>
      {
        message && (
          <FormMessage
            isError={isError}
            isSuccess={isSuccess}
          >
            <p>{ message }</p>
          </FormMessage>
        )
      }
    </FormContainer>
  );
};

export default CreditCardValidatorForm