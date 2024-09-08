import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

export const FormControls = styled.div`
  display: flex;
  gap: 12px;
`;

export const FormInput = styled.input<{ isError: boolean; isSuccess: boolean; }>`
  flex-grow: 1;
  border: 1px solid ${props => (props.isError ? '#FF006F': props.isSuccess ? '#00FF88': '#a0a0a0')};
  border-radius: 8px;
  outline: none;
  padding: 0 1.2em;

  &::placeholder {
    color: #a0a0a0;
  }

  &:focus {
    border-color: #646cff;
    outline: none;
  }
`;

export const FormButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const FormMessage = styled.div<{isError: boolean; isSuccess: boolean;}>`
  border-radius: 8px;
  color: ${props => (props.isError ? '#FF006F': props.isSuccess ? '#00FF88': '#a0a0a0')};
  border: 1px solid ${props => (props.isError ? '#FF006F': props.isSuccess ? '#00FF88': '#a0a0a0')};
`;