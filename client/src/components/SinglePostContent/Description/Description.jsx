import styled from "styled-components";

const StyledDescription = styled.p`
  font-size: var(--secondary-heading-size);
  color: var(--secondary-color-text);
  font-style: italic;
  margin-bottom: 25px;
`;

const Description = ({ description }) => {
  return <StyledDescription>{description}</StyledDescription>;
};

export default Description;
