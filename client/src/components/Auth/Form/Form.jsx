import React from "react";
import FormEl from "./FormEl";
import FormTitle from "./FormTitle";
import Input from "./Input";
import Button from "./Button";
import Text from "./Text";
import {LOGIN, REGISTER} from "../../../utils/authActions";
import {useState} from "react";
import {useLocation} from "react-router";

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation();
    const action = location.pathname === LOGIN ? LOGIN : REGISTER;

    const submit = async (event) => {

    }

    return (
        <FormEl>
            <FormTitle>{action === LOGIN ? "Login" : "Register"}</FormTitle>
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
            <Button>{action === LOGIN ? "Login" : "Register"}</Button>
            <Text>{action === LOGIN ? "Not a member? Register." : "Already have an account? Login."}</Text>
        </FormEl>
    )
}

export default Form;