import React from "react";
import { observer } from "mobx-react-lite";
import auth from "../store/auth";

const RequireAuth = observer(({ children }) => {
  const isAuth = true;

  if (!isAuth) return <div>Unauthorized</div>;
  return children;
});

export default RequireAuth;