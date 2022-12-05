import React from "react";
import MenuLink from "./MenuLink";
import Flex from "../../styles/Flex";

const Menu = () => {
    return (
        <Flex align={"center"} gap={"20px"}>
            <MenuLink current>Latest</MenuLink>
            <MenuLink>Posts</MenuLink>
            <MenuLink>React</MenuLink>
            <MenuLink>CSS</MenuLink>
        </Flex>
    )
}

export default Menu;