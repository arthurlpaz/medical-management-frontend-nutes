import { Box, IconButton, useTheme } from "@mui/material";
import {useContext} from 'react'
import { ColorModeContext } from "../../theme";
import { LightModeOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
import MenuUser from "../../components/menuUser/MenuUser";
// import { SettingsOutlined } from "@mui/icons-material";
// import {logout} from "../../services/auth";

const Topbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);


    return (
        <Box display="flex" justifyContent="flex-end"  p={2}>

            {/* ICONS */}

            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlined />
                    ) : (
                        <LightModeOutlined />
                    )}
                </IconButton>

                <IconButton>
                    <MenuUser/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default Topbar;