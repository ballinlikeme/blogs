import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  });

  return theme === "light" ? (
    <IoSunnyOutline onClick={changeTheme} size={"24px"} cursor={"pointer"} />
  ) : (
    <IoMoonOutline onClick={changeTheme} size={"24px"} cursor={"pointer"} />
  );
};

export default ThemeToggler;