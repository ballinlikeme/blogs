import React from "react";
import styled, { css } from "styled-components";

const StyledMenuLink = styled.a.attrs({
  href: "/",
})`
  font-weight: var(--light-font);
  font-size: var(--regular-text-size);
  ${(props) =>
    props.current &&
    css`
      font-weight: var(--semibold-font);
      position: relative;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        height: 2px;
        width: 100%;
        background-color: var(--help-color);
      }
    `}
`;

const MenuLink = (props) => {
  return <StyledMenuLink {...props} />;
};

export default MenuLink;