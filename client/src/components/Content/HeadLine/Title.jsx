import styled from "styled-components";
import React from "react"

const TitleEl = styled.h1`
  margin-bottom: 60px;    
`

const Title = ({children}) => {
    return <TitleEl>{children}</TitleEl>
}

export default Title;