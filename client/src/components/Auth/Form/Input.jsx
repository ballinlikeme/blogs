import styled from "styled-components"

const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  padding: 5px;
  font-family: var(--font-family);
  font-size: var(--regular-text-size);
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid var(--color-text);
  transition: border-bottom-color .3s ease-in;
  &::placeholder {
    color: var(--color-text);
  }
  &:focus {
    border-bottom-color: var(--accent-color);
  }
`

const StyledInputContainer = styled.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const Input = ({placeholder, type}) => {
    return (
        <StyledInputContainer>
            <StyledInput type={type} placeholder={placeholder} />
        </StyledInputContainer>
    )
}

export default Input;