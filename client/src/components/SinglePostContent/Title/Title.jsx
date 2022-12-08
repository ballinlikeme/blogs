import styled from "styled-components";

const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`

const Title = ({children}) => {
    return <StyledTitle>{children}</StyledTitle>
}

export default Title;