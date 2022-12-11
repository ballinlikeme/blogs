import React from "react";
import styled, { css } from "styled-components";

const StyledMenuLink = styled.a.attrs({
  href: "/",
})`
  font-weight: var(--light-font);
  font-size: var(--regular-text-size);
  transition: color .3s ease-in;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    width: 0;
    transition: width .3s ease-in;
    background-color: var(--help-color);
  }
  ${(props) =>
    props.current &&
    css`
      font-weight: var(--semibold-font);
      &:after {
        width: 100%;
      }
    `}
`;

const MenuLink = (props) => {
  return <StyledMenuLink {...props} />;
};

export default MenuLink;