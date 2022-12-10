import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: var(--semibold-font);
  font-size: var(--regular-text-size);
`

const Label = ({children, htmlFor}) => {
    return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
}

export default Label;