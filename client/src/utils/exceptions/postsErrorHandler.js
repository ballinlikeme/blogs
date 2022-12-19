import {TITLE_ERROR} from "./postsErrorConstants";

const postsErrorHandler = (errorMessage, titleErrorSetter) => {
    switch (errorMessage) {
        case TITLE_ERROR:
            titleErrorSetter(true)
            break;
        default:
            return null;
    }
}

export default postsErrorHandler;