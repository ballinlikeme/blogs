import React from "react";
import {IoSunnyOutline, IoMoonOutline} from "react-icons/io5";

const ThemeIcon = () => {
    const theme = 'light'
    return theme === 'light' ? <IoSunnyOutline size={"24px"} cursor={"pointer"}/> :
        <IoMoonOutline size={"24px"} cursor={"pointer"}/>
}

export default ThemeIcon;