import {Route, Routes} from "react-router";
import {PUBLIC_ROUTES} from "../../utils/routes";

const Router = () => {
    return (
        <Routes>
            {PUBLIC_ROUTES.map(({ id, path, Element }) => {
                return <Route key={id} path={path} element={Element} />
            })}
        </Routes>
    )
}

export default Router;