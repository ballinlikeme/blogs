import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  background-color: #fff;
  border: 1px solid black;
`

const Input = ({placeholder, type, cb, value}) => {
     return <StyledInput value={value} placeholder={placeholder} type={type} onChange={(e) => cb(e.target.value)} />
}

export default Input;