import React from "react";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./global/Sidebar";
import Topbar from "./global/Topbar";
import {Route, Routes} from "react-router-dom";
import Footer from "./global/Footer";
import Home from "./home";
import Register from "./register";
import MonitorarLesao from "./monitor";
import Update from "./update";
import ExamPopup from "../components/exame/popup/ExamPopup";
import PerfilMed from "./perfilMed";

function Application() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar/>
                    <main className="content">
                        <Topbar />
                        <div className="contentRoutes">
                            <Routes>
                                <Route path="/Home" element={<Home />} />
                                <Route path="/registrar-paciente" element={<Register />} />
                                <Route path='/monitorar-lesao' element={<MonitorarLesao />} />
                                <Route path='/update/:id' element={<Update/>}></Route>
                                <Route path="/perfil" element={<PerfilMed />} />
                                <Route path='/edit-exam/:id' element={<ExamPopup open={true} />} />
                            </Routes>
                        </div>
                        <Footer/>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Application;
