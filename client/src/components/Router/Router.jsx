import {Route, Routes} from "react-router";
import {PUBLIC_ROUTES} from "../../utils/constants";

const Router = () => {
    return (
        <Routes>
            {PUBLIC_ROUTES.map(({ path, Element }) => {
                return <Route path={path} element={Element} />
            })}
        </Routes>
    )
}

export default Router;