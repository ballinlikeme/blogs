import styled from "styled-components"

const StyledGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
  gap: 32px;
`

const Grid = ({children}, props) => {
    return <StyledGrid {...props}>{children}</StyledGrid>
}

export default Grid;