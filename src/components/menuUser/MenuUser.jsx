import React from "react";
import {Auth} from "../../services/service";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import {PersonOutline} from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import {IconButton, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {useNavigate} from "react-router-dom";
import {authLogout} from "../../services/service.auth";

export default function MenuUser() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        authLogout();
    }

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <PersonOutline/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem><EditIcon style={{marginRight: '0.5vh', color: theme.palette.mode === "dark" ? colors.greenAccent[500] : "black"}}/>
                    Editar Usuario
                </MenuItem>
                <MenuItem onClick={handleLogout} style={{color: "red"}}><LogoutIcon style={{marginRight: '0.5vh', color: "red"}}/>
                    Sair
                </MenuItem>
            </Menu>
        </div>
    );
}