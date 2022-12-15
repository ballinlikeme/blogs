import styled from "styled-components";

const StyledSubmitButton = styled.button`
    padding: 5px 10px;
    background: transparent;
    color: var(--color-text);
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-text);
    font-family: var(--font-family);
    font-weight: var(--medium-font);
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 10px;
`

const SubmitButton = ({children, cb}) => {
    return <StyledSubmitButton onClick={cb}>{children}</StyledSubmitButton>
}

export default SubmitButton;