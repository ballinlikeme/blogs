import React from "react";
import Flex from "../../styles/Flex";
import LoginToggler from "./Togglers/LoginToggler";
import ThemeToggler from "./Togglers/ThemeToggler";
import {observer} from "mobx-react-lite";
import AdminButton from "./AdminButton";
import auth from "../../../store/auth";
import {Link} from "react-router-dom";

const Controls = observer(() => {
  return (
    <Flex align={"center"} gap={"17px"} justify={"flex-end"}>
         {auth.getUser()?.role === "ADMIN" ? <Link to="/create"><AdminButton /></Link> : ""}
      <ThemeToggler />
      <LoginToggler />

    </Flex>
  );
});

export default Controls;