import styled, {css} from "styled-components";

const StyledPanelWrapper = styled.div`
    width: 100%;
    border: 1px solid var(--color-text);
    border-top: none;
    padding: 10px;
    ${props => props.error && css`
      border: 1px solid var(--help-color);
    `}
`

const PanelWrapper = ({children, error}) => {
    return <StyledPanelWrapper error={error}>{children}</StyledPanelWrapper>
}

export default PanelWrapper;