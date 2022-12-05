import React from "react"
import styled from "styled-components";

const StyledCounter = styled.span`
  font-weight: var(--light-font);
  font-size: var(--secondary-heading-size);
  
`

const Counter = ({children}) => {
    return <StyledCounter>{children}</StyledCounter>
}

export default Counter;
