import styled from "styled-components"

const StyledDescription = styled.p`
  font-size: var(--secondary-heading-size);
  color: var(--secondary-color-text);
  font-style: italic;
  margin-bottom: 25px;
`

const Description = ({children}) => {
    return <StyledDescription>{children}</StyledDescription>
}

export default Description;