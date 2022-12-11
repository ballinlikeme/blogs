import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid var(--help-color);
  border-radius: 10px;
  color: var(--help-color);
  text-transform: uppercase;
  padding: 5px 10px;
  font-weight: var(--medium-font);
  cursor: pointer;
`

const AdminButton = () => {
     return <StyledButton>ADMIN</StyledButton>
}

export default AdminButton