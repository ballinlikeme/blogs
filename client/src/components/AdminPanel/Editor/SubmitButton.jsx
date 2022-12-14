import styled from "styled-components";

const StyledSubmitButton = styled.button`
    padding: 5px 10px;

`

const SubmitButton = ({children, cb}) => {
    return <StyledSubmitButton onClick={() => cb()}>{children}</StyledSubmitButton>
}

export default SubmitButton;