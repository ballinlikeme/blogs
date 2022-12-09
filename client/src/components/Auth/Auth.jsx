import AuthWrapper from "./AuthWrapper";
import PageWrapper from "../styles/PageWrapper";
import Form from "./Form/Form";

const Auth = () => {
    return (
        <PageWrapper>
            <AuthWrapper>
                <Form />
            </AuthWrapper>
        </PageWrapper>
    )
}

export default Auth;