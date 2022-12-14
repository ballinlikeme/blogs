import styled from "styled-components";

const StyledDescription = styled.p`
  font-size: var(--secondary-heading-size);
  color: var(--secondary-color-text);
  font-style: oblique 10deg;
  margin-bottom: 25px;
  line-height: 200%;
`;

const Description = ({ description }) => {
  return <StyledDescription>{description}</StyledDescription>;
};

export default Description;
