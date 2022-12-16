import React, {useEffect} from "react";
import FormEl from "./FormEl";
import FormTitle from "./FormTitle";
import Input from "./Input";
import Button from "./Button";
import Text from "./Text";
import {LOGIN} from "../../../utils/authActions";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router";
import authService from "../../../services/authService";
import {Link} from "react-router-dom";
import auth from "../../../store/auth"
import authErrorHandler from "../../../utils/exceptions/authErrorHandler";

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passError, setPassError] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    const isLogin = location.pathname === LOGIN;

    useEffect(() => {
        setPassError(false);
        setEmailError(false);
    }, [email, password]);

    const submit = async (event) => {
        event.preventDefault();
        if (email.length === 0) return setEmailError(true)
        if (password.length === 0) return setPassError(true)
        try {
            const user = isLogin ? await authService.login(email, password) : await authService.register(email, password)
            auth.authenticate(user);
            return navigate('/')
        } catch (e) {
            const errorMessage = e.response.data.message
            authErrorHandler(errorMessage, setEmailError, setPassError);
        }

    }

    return (
        <FormEl>
            <FormTitle>{isLogin ? "Login" : "Register"}</FormTitle>
            <Input
                value={email}
                handler={setEmail}
                placeholder={"Email"}
                type={"text"}
                error={emailError}
            />
            <Input
                value={password}
                handler={setPassword}
                placeholder={"Password"}
                type={"password"}
                error={passError}
            />
            <Button handler={submit}>{isLogin ? "Login" : "Register"}</Button>
            <Text>{isLogin ? `Not a member?` : "Already have an account?"} <Link to={isLogin ? "/register" : "/login"}>{isLogin ? "Register." : "Login."}</Link></Text>
        </FormEl>
    )
}

export default Form;