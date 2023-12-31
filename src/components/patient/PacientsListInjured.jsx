import Pacient from "./Pacient";
import { Box, IconButton, Typography, useTheme, Dialog, Button } from "@mui/material";
import { tokens } from "../../theme";
import { useContext, useState } from "react";
import { PacientContext } from "../../context/PacientsContext";
import { useEffect } from "react";

const PacientsListInjured = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const{pacients} = useContext(PacientContext)
    
    const [show, setShow] = useState(true)
    const handleShowPacient = () => setShow(true)
    const handleClosePacient = () => setShow(false)  
    const acao = false
    
    useEffect(() =>{
        handleClosePacient()
    }, [pacients]) 

    return(
        
        
        <Box m="20">

            {/*Crud table */}
            <Box
                sx={{
                    // backgroundColor: "whitesmoke",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    mt:'20px'
                }}
            >
                
            </Box>
            
            <Box
                style={{
                    background: theme.palette.mode === "dark" ? colors.greenAccent[600] : colors.grey[900],
                }} 
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
                            <th>Idade</th>
                            <th>Gênero</th>
                            <th>Altura</th>
                            <th>Peso</th>
                            <th>Contato de Emergência</th>
                            <th>Lesionado</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {pacients.map(pacient => (
                            <tr key={pacient.id}>
                                <Pacient pacient={pacient} acao={acao} />
                            </tr>

                        ))}
                    </tbody>
                </table>
            </Box>
            </Box>
            
        
    )
}

export default PacientsListInjured;