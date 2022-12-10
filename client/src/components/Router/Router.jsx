import {Route, Routes} from "react-router";
import {PUBLIC_ROUTES, PRIVATE_ROUTES} from "../../utils/routes";
import RequireAuth from "../../hoc/RequireAuth";

const Router = () => {
    return (
        <Routes>
            {PUBLIC_ROUTES.map(({ id, path, Element }) => {
                return <Route key={id} path={path} element={Element} />
            })}
            {PRIVATE_ROUTES.map(({ id, path, Element }) => {
                return <Route key={id} path={path} element={<RequireAuth>{Element}</RequireAuth>} />
            })}
        </Routes>
    )
}

export default Router;