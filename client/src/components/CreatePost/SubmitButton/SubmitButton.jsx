import styled from "styled-components"

const StyledButton = styled.button`
  padding: 5px 10px;
  text-transform: uppercase;
  background-color: #FFF;
  border: 1px solid;
  cursor: pointer;
`

const SubmitButton = ({cb}) => {
     return <StyledButton onClick={cb}>Submit</StyledButton>
}

export default SubmitButton;