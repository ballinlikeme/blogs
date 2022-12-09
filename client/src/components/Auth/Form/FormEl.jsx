import styled from "styled-components"

const StyledFrom = styled.form`
  width: 300px;
  background-color: var(--sec-background-color);
  padding: 30px;
  border-radius: 10px;
`

const FormEl = ({children}) => {
    return <StyledFrom>{children}</StyledFrom>
}

export default FormEl;