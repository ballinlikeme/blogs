import styled from "styled-components";

const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = ({ children, title }) => {
  return <StyledTitle>{children ? children : title}</StyledTitle>;
};

export default Title;
