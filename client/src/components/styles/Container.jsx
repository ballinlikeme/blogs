import styled from "styled-components";

const StyledContainer = styled.div`
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
`

const Container = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>
}

export default Container;