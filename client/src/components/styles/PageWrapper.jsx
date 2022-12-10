import styled from "styled-components";

const StyledPageWrapper = styled.main`
  padding: 150px 0 30px;
  background-color: var(--background-color);
`;

const PageWrapper = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;