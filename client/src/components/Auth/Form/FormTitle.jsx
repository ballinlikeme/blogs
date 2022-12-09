import styled from "styled-components"

const StyledFormTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`

const FormTitle = ({children}) => {
    return <StyledFormTitle>{children}</StyledFormTitle>
}

export default FormTitle;