import styled from "styled-components";

const StyledDescriptionEditor = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  background: transparent;
  font-size: var(--regular-text-size);
  border: 1px solid #000;
  border-top: none;
  font-family: var(--font-family);
  padding: 5px 10px;
  &::placeholder {
    color: var(--color-text);
  }
  &:focus {
    outline: none;
  }
`;

const DescriptionEditor = ({ cb, value, placeholder }) => {
    return <StyledDescriptionEditor placeholder={placeholder} value={value} onChange={e => cb(e.target.value)} />
}

export default DescriptionEditor