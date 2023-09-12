import { Box, IconButton, TextField,Dialog, Button, Typography, useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from "@mui/icons-material/Delete";
import { PerfilContext } from "../../context/PerfilContext";
import { useState, useContext } from "react";
import { useEffect } from "react";
import EditFormPerfil from "./EditFormPerfil";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../theme";

const PerfilMedic = ({perfil}) =>{

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const {deletePerfil} = useContext(PerfilContext)

    useEffect(() =>{
        handleClose()
    }, [perfil]) 

    return(
        
        <>
        <Box
            sx={{
                // backgroundColor: "whitesmoke",
                display: "flex",
                justifyContent: "end",
                alignItems: "center"
            }}
        >
            <IconButton onClick={handleShow}>
                <Button 
                    style={{
                    background: theme.palette.mode === "dark" ? colors.blueAccent[900] : colors.greenAccent[400],
                    }} 
                    sx={{ boxShadow: "none",}}  
                    variant="contained" startIcon={<EditIcon />}>
                    
                    Editar Perfil
                </Button>
            </IconButton>

        </Box>

        
        <tr className="trPerfilMed">
        <TextField
          label={<Typography variant="headline" component="h3" >Nome</Typography>}
          defaultValue={perfil.name}
          InputProps={{
            readOnly: true,
          }}
          sx={{width:"700px"}}
        />
            <td className="tdPerfilMed">
                <TextField
                    label={<Typography variant="headline" component="h3" >Contato Pessoal</Typography>}
                    defaultValue={perfil.contact_personal}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ width: "300px" }}
                />
            </td>

        </tr>

        <tr className="trPerfilMed">
        <TextField
          label={<Typography variant="headline" component="h3" >Email</Typography>}
          defaultValue={perfil.email}
          InputProps={{
            readOnly: true,
          }}
          sx={{width:"700px"}}
        />
            <td className="tdPerfilMed">
                <TextField
                    label={<Typography variant="headline" component="h3" >Contato de Emergência</Typography>}
                    defaultValue={perfil.contact_personal}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ width: "300px" }}
                />
            </td>
        </tr>

        <tr className="trPerfilMed">
        <TextField
          label={<Typography variant="headline" component="h3" >Rua</Typography>}
          defaultValue={perfil.street}
          InputProps={{
            readOnly: true,
          }}
          sx={{width:"500px"}}
        /> 
            <td className="tdPerfilMed">
                <TextField
                    label={<Typography variant="headline" component="h3" >Número</Typography>}
                    defaultValue={perfil.number}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ width: "100px" }}
                />
            </td>

            <td className="tdPerfilMed">
                <TextField
                    label={<Typography variant="headline" component="h3" >Especialidade</Typography>}
                    defaultValue={perfil.speciality}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ width: "300px" }}
                />
            </td>
        </tr>

        <tr className="trPerfilMed">
        <TextField
          label={<Typography variant="headline" component="h3" >Cidade</Typography>}
          defaultValue={perfil.city}
          InputProps={{
            readOnly: true,
          }}
          sx={{width:"700px"}}
        />
            
            <td className="tdPerfilMed">
                <TextField
                    label={<Typography variant="headline" component="h3" >Data de Aniversário</Typography>}
                    defaultValue={perfil.date_birthday}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ width: "300px" }}
                />
            </td>
        </tr>
       

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

export default PerfilMedic;