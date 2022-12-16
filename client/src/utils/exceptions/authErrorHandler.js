import {EMAIL_ERROR, PASS_ERROR} from "./authErrorConstants"

function authErrorHandler (errorMessage, emailErrorSetter, passErrorSetter) {
    switch (errorMessage) {
        case EMAIL_ERROR:
            emailErrorSetter(true)
            console.log('email error')
            break;
        case PASS_ERROR:
            passErrorSetter(true)
            break;
        default:
            return null;
    }
}

export default authErrorHandler;