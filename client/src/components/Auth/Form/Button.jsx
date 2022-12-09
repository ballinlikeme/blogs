import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: none;
  background-color: var(--accent-color);
  color: #fff;
  font-weight: var(--bold-font);
  font-size: 16px;
  cursor: pointer;
`

const Button = ({children}) => {
    return <StyledButton>{children}</StyledButton>
}

export default Button