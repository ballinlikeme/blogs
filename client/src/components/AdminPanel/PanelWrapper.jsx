import styled from "styled-components";

const StyledPanelWrapper = styled.div`
    width: 100%;
    border: 1px solid #000;
    border-top: none;
`

const PanelWrapper = ({children}) => {
    return <StyledPanelWrapper>{children}</StyledPanelWrapper>
}

export default PanelWrapper;