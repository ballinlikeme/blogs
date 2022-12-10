import React from "react";
import styled from "styled-components";

const StyledLogo = styled.a.attrs({
  href: "/",
})`
  color: var(--accent-color);
  font-size: var(--logo-text-size);
  font-weight: var(--semibold-font);
`;

const Logo = () => {
  return <StyledLogo>SomeGuysBlog</StyledLogo>;
};

export default Logo;