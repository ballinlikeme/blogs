import React from "react";
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

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const isLogin = location.pathname === LOGIN;

    const submit = async (event) => {
        event.preventDefault();
        const user = isLogin ? await authService.login(email, password) : await authService.register(email, password)
        console.log(user)
        auth.authenticate(user);
        if (user) return navigate("/")
    }

    return (
        <FormEl>
            <FormTitle>{isLogin ? "Login" : "Register"}</FormTitle>
            <Input
                value={email}
                handler={setEmail}
                placeholder={"Email"}
                type={"text"}
            />
            <Input
                value={password}
                handler={setPassword}
                placeholder={"Password"}
                type={"password"}
            />
            <Button handler={submit}>{isLogin ? "Login" : "Register"}</Button>
            <Text>{isLogin ? `Not a member?` : "Already have an account?"} <Link to={isLogin ? "/register" : "/login"}>{isLogin ? "Register." : "Login."}</Link></Text>
        </FormEl>
    )
}

export default Form;