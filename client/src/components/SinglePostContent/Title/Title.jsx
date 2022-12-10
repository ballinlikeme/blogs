import styled from "styled-components";

const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
