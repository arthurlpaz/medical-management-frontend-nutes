import { Box, IconButton, Dialog, Button, Typography, Link } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from "@mui/icons-material/Delete";
import { PerfilContext } from "../../context/PerfilContext";
import { useState, useContext } from "react";
import { useEffect } from "react";
import EditFormPerfil from "./EditFormPerfil";
import { useNavigate } from "react-router-dom";


const PerfilMedic = ({perfil}) =>{

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const {deletePerfil} = useContext(PerfilContext)

    useEffect(() =>{
        handleClose()
    }, [perfil]) 

    return(
        
        <>
        <td>{perfil.name}</td>
        <td>{perfil.email}</td>
        <td>{perfil.street}</td>
        <td>{perfil.number}</td>
        <td>{perfil.city}</td>
        <td>{perfil.contact_personal}</td>
        <td>{perfil.contact_emergency}</td>
        <td>{perfil.speciality}</td>
        <td>{perfil.date_birthday}</td>
       
         <td><IconButton onClick={handleShow}  ><EditIcon /></IconButton>
            <IconButton onClick={() => deletePerfil(perfil.id)}  ><DeleteIcon /></IconButton></td> 


        <Dialog open={show} onClose={handleClose} fullWidth>
            <EditFormPerfil thePerfil={perfil} />
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="end"
                alignItems="center"
                mr="20px"
                mb="10px"
            >
                
                <Button onClick={handleClose} variant="contained" sx={{ m: "10px", p: "10px" }}><Typography>fechar</Typography></Button>
            </Box>
        </Dialog> 
        </>

    )
}

export default PerfilMedic;