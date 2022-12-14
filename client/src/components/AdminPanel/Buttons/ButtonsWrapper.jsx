import styled from "styled-components";

const StyledButtonsWrapper = styled.div`
    width: 100%;
    border: 1px solid black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: none;
`

const ButtonsWrapper = ({children}) => {
    return <StyledButtonsWrapper>{children}</StyledButtonsWrapper>
}

export default ButtonsWrapper;