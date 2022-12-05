import styled from "styled-components";

const StyledFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "stretch"};
  align-items: ${props => props.align || "stretch"};
  margin: ${props => props.margin || "0px"};
  gap: ${props => props.gap || "0px"};
`

const Flex = (props) => {
    return <StyledFlex {...props} />
}

export default Flex;