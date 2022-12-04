import React from "react";
import {CiLogin, CiLogout} from "react-icons/ci";

const LoginIcon = () => {
    const isAuth = false;
    return isAuth ? <CiLogout size={"24px"} cursor={"pointer"}/> : <CiLogin size={"24px"} cursor={"pointer"}/>
}

export default LoginIcon;