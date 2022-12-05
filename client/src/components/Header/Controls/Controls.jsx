import React from "react"
import Flex from "../../styles/Flex"
import LoginToggler from "./Togglers/LoginToggler";
import ThemeToggler from "./Togglers/ThemeToggler";

const Controls = () => {
    return (
        <Flex align={"center"} gap={"17px"} justify={"flex-end"}>
            <ThemeToggler />
            <LoginToggler />
        </Flex>
    )
}

export default Controls;