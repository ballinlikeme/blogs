import styled from "styled-components";

const StyledSelect = styled.select`
  background-color: var(--background-color);
  color: var(--color-text);
  font-weight: var(--regular-font);
  outline: none;
  border: 1px solid var(--color-text);
  padding: 5px 10px;
  width: 300px;
  border-radius: 10px;
  top: auto;
  
  &:focus {
    border: 1px solid var(--accent-color);
    box-shadow: 1px 1px 3px rgba(68, 51, 255, 0.4);
  }
`



const Select = ({children, defaultValue}) => {
    return <StyledSelect defaultValue={defaultValue}>{children}</StyledSelect>
}
export default Select