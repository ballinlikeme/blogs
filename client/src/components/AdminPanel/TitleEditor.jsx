import styled from "styled-components";

const StyledTitleEditor = styled.input`
    width: 100%;
    border: 1px solid #000;
    padding: 5px 10px;
    font-size: var(--font-size);
    color: var(--color-text);
    background: transparent;
    &::placeholder {
        font-size: var(--font-size);
        color: var(--color-text);
    }
`

const TitleEditor = ({cb, placeholder, value}) => {
    return <StyledTitleEditor value={value} placeholder={placeholder} onChange={(e) => cb(e.target.value)} />
}

export default TitleEditor;