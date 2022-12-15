import styled from "styled-components";

const StyledOption = styled.option`
  background-color: var(--background-color);
  color: var(--color-text);
`

const Option = ({children, id, value, cb}) => {
    return <StyledOption onClick={e => cb(e.target.id)} id={id} value={value}>{children}</StyledOption>
}

export default Option;