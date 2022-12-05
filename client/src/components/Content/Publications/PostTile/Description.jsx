import React from "react";
import styled from "styled-components";

const DescriptionEl = styled.p`
  font-weight: var(--regular-font);
  font-size: var(--regular-text-size);
  line-height: 200%;
  flex: 1 1 auto;
`

const Description = ({children}) => {
    return <DescriptionEl>{children}</DescriptionEl>
}

export default Description;