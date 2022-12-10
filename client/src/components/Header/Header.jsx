import React from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import Controls from "./Controls/Controls";
import Logo from "./Logo/Logo";
import Container from "../styles/Container";
import Flex from "../styles/Flex";

const HeaderEl = styled.header`
  background-color: var(--background-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 10;
`;

const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Flex justify={"space-between"} align={"center"}>
          <Flex align={"center"} gap={"30px"}>
            <Logo />
            <Menu />
          </Flex>
          <Controls />
        </Flex>
      </Container>
    </HeaderEl>
  );
};

export default Header;