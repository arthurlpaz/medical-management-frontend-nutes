import React from "react";
import {isAuth} from "./services/service.auth";
import Application from "./scenes/Application";
import AuthPage from "./scenes/auth/login";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <div class="app">
                {isAuth() ?  <AuthPage/> : <Application/>}
            </div>
        </BrowserRouter>
    )
}

export default App;