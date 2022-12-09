import styled from "styled-components"

const StyledText = styled.p`
  color: var(--color-text);
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
`

const Text = ({children}) => {
    return <StyledText>{children}</StyledText>
}

export default Text;