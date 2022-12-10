import styled from "styled-components"

const StyledButton = styled.button`
  background-color: var(--sec-background-color);
  border: 1px solid var(--color-text);
  color: var(--color-text);
  padding: 5px 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  display: block;
`

const Button = ({children, handler}) => {
    return <StyledButton onClick={handler}>{children}</StyledButton>
}

export default Button;