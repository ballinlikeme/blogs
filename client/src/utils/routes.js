import SingleCategoryPage from "../pages/SingleCategoryPage";
import SinglePostPage from "../pages/SinglePostPage";
import AuthPage from "../pages/AuthPage";
import CreatePage from "../pages/CreatePage";

const PUBLIC_ROUTES = [
    {
        id: 1,
        path: "/",
        Element: <SingleCategoryPage />
    },
    {
        id: 2,
        path: "post/:id",
        Element: <SinglePostPage />
    },
    {
        id: 3,
        path: "register",
        Element: <AuthPage />
    },
    {
        id: 4,
        path: "login",
        Element: <AuthPage />
    }
]

const PRIVATE_ROUTES = [
    {
        id: 1,
        path: "/create",
        Element: <CreatePage />
    }
]

export {PUBLIC_ROUTES, PRIVATE_ROUTES};