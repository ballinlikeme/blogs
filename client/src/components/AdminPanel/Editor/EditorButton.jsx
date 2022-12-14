import styled, { css } from "styled-components"

const StyledEditorButton = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    padding: 5px;
    color: #999;
    cursor: pointer;
    &:active {
        color: #5890FF;
    }
    ${props => props.active && css`
        color: #5890FF;
    `}
`

const EditorButton = ({label, onClick, active, style}) => {
    const onClickCustom = (e) => {
        e.preventDefault()
        onClick(style);
    }

    return <StyledEditorButton active={active} onClick={onClickCustom}>{label}</StyledEditorButton>
}

export default EditorButton;