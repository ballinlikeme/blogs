import React from "react";
import FormEl from "./FormEl";
import FormTitle from "./FormTitle";
import Input from "./Input";
import Button from "./Button";
import Text from "./Text";
import {LOGIN, REGISTER} from "../../../utils/authActions";
import {useState} from "react";
import {useLocation} from "react-router";
import authService from "../../../services/authService";
import {Link} from "react-router-dom";

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation();
    const action = location.pathname === LOGIN ? LOGIN : REGISTER;

    const isLogin = location.pathname === LOGIN;

    const submit = async (event) => {
        event.preventDefault();
        switch (action) {
            case LOGIN:
                return authService.login(email, password);
            case REGISTER:
                return authService.register(email, password);
        }
    }

    return (
        <FormEl>
            <FormTitle>{isLogin ? "Login" : "Register"}</FormTitle>
            <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Email"}
                type={"text"}
            />
            <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={"Password"}
                type={"password"}
            />
            <Button handler={submit}>{isLogin ? "Login" : "Register"}</Button>
            <Text>{isLogin ? `Not a member?` : "Already have an account?"} <Link to={isLogin ? "/register" : "/login"}>{isLogin ? "Register." : "Login."}</Link></Text>
        </FormEl>
    )
}

export default Form;