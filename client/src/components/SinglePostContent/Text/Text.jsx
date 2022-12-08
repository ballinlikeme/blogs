import styled from "styled-components";

const StyledText = styled.p`
  font-size: var(--secondary-heading-size);
  font-weight: var(--semibold-font);
  line-height: 200%;
`

const Text = ({children}) => {
    return <StyledText>{children}</StyledText>
}

export default Text;