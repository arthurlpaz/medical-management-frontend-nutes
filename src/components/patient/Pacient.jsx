import { Box, IconButton, useTheme, Dialog, Button, Typography, Link } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from "@mui/icons-material/Delete";
import { PacientContext } from "../../context/PacientsContext";
import { useState, useContext } from "react";
import { useEffect } from "react";
import EditFormPacient from "./EditFormPacients";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";

const Pacient = ({pacient, acao}) =>{

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const {deletePacient} = useContext(PacientContext)

    const navigate = useNavigate()

    useEffect(() =>{
        handleClose()
    }, [pacient]) 

    return(
        
        <>
        <td>{pacient.name}</td>
        <td>{pacient.email}</td>
        <td>{pacient.street}</td>
        <td>{pacient.number}</td>
        <td>{pacient.city}</td>
        <td>{pacient.contact_personal}</td>
        <td>{pacient.age}</td>
        <td>{pacient.genre}</td>
        <td>{pacient.height}</td>
        <td>{pacient.weight}</td>
        <td>{pacient.contact_emergency}</td>
        <td>{pacient.injured ? "Sim": "Não"}</td>
        {acao ? <td><IconButton onClick={handleShow}  ><EditIcon /></IconButton>
                <IconButton onClick={() => deletePacient(pacient.id)}  ><DeleteIcon /></IconButton></td> 
            : 
                <td><IconButton onClick={()=> navigate(`/update/${pacient.id}`)} > <VisibilityIcon /></IconButton></td>
        }
        

        <Dialog open={show} onClose={handleClose} fullWidth>
            <EditFormPacient thePacient={pacient} />
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="end"
                alignItems="center"
                mr="20px"
                mb="10px"
            >
                
                <Button 
                    style={{
                        background: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.greenAccent[400],
                    }} 
                    onClick={handleClose} 
                    variant="contained" 
                    sx={{ m: "10px", p: "10px" }}>

                    <Typography>fechar</Typography>
                </Button>
            </Box>
        </Dialog> 
        </>

    )
}

export default Pacient;