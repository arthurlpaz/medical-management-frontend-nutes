import React from "react";
import {isAuth} from "./services/auth";
import Application from "./scenes/Application";
import AuthPage from "./scenes/auth/login";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <div class="app">
                {isAuth() ? <Application/> : <AuthPage/>}
            </div>
        </BrowserRouter>
    )
}

export default App;