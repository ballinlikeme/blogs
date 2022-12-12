import React from "react";
import { observer } from "mobx-react-lite";
import auth from "../store/auth";
import { useNavigate } from "react-router";

const RequireAuth = observer(({ children }) => {
  const isAuth = auth.getAuth();
  const navigate = useNavigate();

  if (!isAuth) return navigate("/login");
  return children;
});

export default RequireAuth;
