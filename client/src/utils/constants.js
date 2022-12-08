import SingleCategoryPage from "../pages/SingleCategoryPage";
import SinglePostPage from "../pages/SinglePostPage";

const PUBLIC_ROUTES = [
    {
        id: 1,
        path: "/",
        Element: <SingleCategoryPage />
    },
    {
        id: 2,
        path: "/post/:id",
        Element: <SinglePostPage />
    }
]

const PRIVATE_ROUTES = [
    {
        id: 1,
        path: "/create"
    }
]

export {PUBLIC_ROUTES};