import {IoLogInOutline, IoLogOutOutline} from "react-icons/io5"
import {Link} from "react-router-dom";
import auth from "../../../../store/auth"
import {observer} from "mobx-react-lite";

const LoginToggler = observer(() => {
    const isAuth = auth.getAuth();

    return isAuth ? <IoLogOutOutline onClick={() => auth.logout()} size={"24px"} cursor={"pointer"} /> : <Link to="/login"><IoLogInOutline size={"24px"} cursor={"pointer"} /></Link>
})

export default LoginToggler;