import {IoLogInOutline, IoLogOutOutline} from "react-icons/io5"

const LoginToggler = () => {
    const isAuth = false;
    return isAuth ? <IoLogOutOutline size={"24px"} cursor={"pointer"} /> : <IoLogInOutline size={"24px"} cursor={"pointer"} />
}

export default LoginToggler;