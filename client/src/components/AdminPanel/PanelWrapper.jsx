import styled from "styled-components";

const StyledPanelWrapper = styled.div`
    width: 100%;
    border: 1px solid #000;
    border-top: none;
    padding: 10px;
`

const PanelWrapper = ({children}) => {
    return <StyledPanelWrapper>{children}</StyledPanelWrapper>
}

export default PanelWrapper;