import styled, { css } from "styled-components";

const StyledTypeButton = styled.button`
    width: 100%;
    padding: 5px 10px;
    background-color: #D9D9D9;
    border: 1px solid black;
    border-top-right-radius: 10px;
    transition: background-color .3s ease-in;
    cursor: pointer;
    &:hover {
        background-color: #D8D8D8;
    }

    ${props => props.left && css`
        border-top-right-radius: 0px;
        border-top-left-radius: 10px;
    `
    }
`

const TypeButton = ({children, setValue, left}) => {
    return <StyledTypeButton left={left} onClick={e => setValue(children)}>{children}</StyledTypeButton>
}

export default TypeButton;