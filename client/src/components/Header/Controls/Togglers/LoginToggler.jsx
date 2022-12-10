import {IoLogInOutline, IoLogOutOutline} from "react-icons/io5"
import {Link} from "react-router-dom";
import auth from "../../../../store/auth"

const LoginToggler = () => {
    const isAuth = auth.getAuth();
    return isAuth ? <IoLogOutOutline size={"24px"} cursor={"pointer"} /> : <Link to="/login"><IoLogInOutline size={"24px"} cursor={"pointer"} /></Link>
}

export default LoginToggler;