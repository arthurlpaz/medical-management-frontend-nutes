
import { Box, IconButton, Typography, useTheme, Dialog, Button, InputLabel,FormGroup, FormControl, Input } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { tokens } from "../../theme";
import { useContext, useState } from "react";
import { PerfilContext } from "../../context/PerfilContext";
import { useEffect } from "react";
import AddFormPerfil from "./AddFormPerfil";
import PerfilMedic from "./PerfilMedic";

const PerfilList = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const{perfils} = useContext(PerfilContext)
    
    const [show, setShow] = useState(true)
    const handleShowPerfil = () => setShow(true)
    const handleClosePerfil = () => setShow(false)  
    
    useEffect(() =>{
        handleClosePerfil()
    }, [perfils]) 

    return(
        
        
        <><Box m="20">

            {/*Crud table */}
            <Box
                sx={{
                    // backgroundColor: "whitesmoke",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center"
                }}
            >
                <IconButton onClick={handleShowPerfil}>
                    <AddBoxIcon />
                </IconButton>
            </Box>

            <Box
                bgcolor="grey"
                borderRadius="10px"
                p="10px"
                m="20px"
                maxHeight="520px"
                maxWidth="auto"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                whiteSpace="normal"
                overflow="auto"
                textAlign="center"
            >
        

                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th >Rua</th>
                            <th >Número</th>
                            <th >Cidade</th>
                            <th>Contato</th>
                            <th>Contato de Emergência</th>
                            <th>Especialidade</th>
                            <th>Data de Aniversário</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {perfils.map(perfil => (
                            <tr key={perfil.id}>
                                <PerfilMedic perfil={perfil}  />
                                
                            </tr>

                        ))}
                    </tbody>
                </table>
            </Box>
            </Box>
            <Dialog open={show} onClose={handleClosePerfil} fullWidth>
                <AddFormPerfil/>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="end"
                    alignItems="center"
                    mr="20px"
                    mb="10px"
                >
                    <Button onClick={handleClosePerfil} variant="contained" sx={{ m: "10px", p: "10px" }}><Typography>fechar</Typography></Button>
                </Box>

            </Dialog></>
        
    )
}

export default PerfilList;