import React, {useState} from "react";
import AuthWrapper from "./AuthWrapper";
import PageWrapper from "../styles/PageWrapper";
import Form from "./Form/Form";
import {useLocation} from "react-router";
import {LOGIN, REGISTER} from "../../utils/authActions";

const Auth = () => {
    const location = useLocation();
    const action = location.pathname === LOGIN ? LOGIN : REGISTER;

    return (
        <PageWrapper>
            <AuthWrapper>
                <Form
                    action={action}
                />
            </AuthWrapper>
        </PageWrapper>
    )
}

export default Auth;