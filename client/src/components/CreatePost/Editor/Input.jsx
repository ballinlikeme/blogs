import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  background-color: var(--sec-background-color);
  border: 1px solid var(--color-text);
  margin-bottom: 30px;
  color: var(--color-text);
  &::placeholder {
    color: var(--color-text);
  }
`

const Input = ({id, type, placeholder, handler}) => {
    return <StyledInput onChange={(event) => handler(event.target.value)}  id={id} type={type} placeholder={placeholder}/>
}

export default Input;