import {useEffect} from "react";
import Router from "./Router/Router";
import authService from "../services/authService";
import auth from "../store/auth";
import {observer} from "mobx-react-lite";

const Init = observer(() => {
    useEffect(() => {
        authService.checkAuth()
            .then(result => {
                auth.authenticate(result.data);
            })
    })
    return (
        <Router />
    )
})

export default Init;