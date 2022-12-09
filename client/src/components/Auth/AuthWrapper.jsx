import styled from "styled-components"

const StyledAuthWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AuthWrapper = ({children}) => {
    return <StyledAuthWrapper>{children}</StyledAuthWrapper>
}

export default AuthWrapper;