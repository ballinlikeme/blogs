import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border: none;
  letter-spacing: 0.05em;
  font-weight: var(--medium-font);
  cursor: pointer;
`
const TypeButton = ({children, cb}) => {
     return <StyledButton onClick={(e) => cb(children)}>{children}</StyledButton>
}

export default TypeButton;