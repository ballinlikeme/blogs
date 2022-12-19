import styled, {css} from "styled-components";

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
  ${props => props.error && css`
    border: 1px solid var(--help-color);
  `}
`;

const DescriptionEditor = ({ cb, value, placeholder, error }) => {
    return <StyledDescriptionEditor error={error} placeholder={placeholder} value={value} onChange={e => cb(e.target.value)} />
}

export default DescriptionEditor