import SingleCategoryPage from "../pages/SingleCategoryPage";
import SinglePostPage from "../pages/SinglePostPage";
import AuthPage from "../pages/AuthPage";
import CreatePage from "../pages/CreatePage";
import IndexPage from "../pages/IndexPage";

const PUBLIC_ROUTES = [
  {
    id: 1,
    path: "/:category",
    Element: <SingleCategoryPage />,
  },
  {
    id: 2,
    path: "post/:id",
    Element: <SinglePostPage />,
  },
  {
    id: 3,
    path: "register",
    Element: <AuthPage />,
  },
  {
    id: 4,
    path: "login",
    Element: <AuthPage />,
  },
  {
    id: 5,
    path: "/",
    Element: <IndexPage />
  }
];

const PRIVATE_ROUTES = [
  {
    id: 1,
    path: "/create",
    Element: <CreatePage />,
  },
];

export { PUBLIC_ROUTES, PRIVATE_ROUTES };