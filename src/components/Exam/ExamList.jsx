import { useContext, useState } from "react"
import { ExamContext } from "../../context/ExamContext"
import Exam from "./Exam"
import { Box, Typography, useTheme, IconButton, Dialog, Button } from "@mui/material"
import AddFormExam from "./AddFormExam"
import { tokens } from "../../theme";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useEffect } from "react"

const ExamList = () =>{

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const {exams} = useContext(ExamContext)
    const [show, setShow] = useState(false)
    const handleShowExam = () => setShow(true)
    const handleCloseExam = () => setShow(false)  

    useEffect(() =>{
        handleCloseExam()
    }, [exams]) 

    return(

        <>
        
        <Box
        mt="10px"
        gridColumn="span 6"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        >
        <Box
        mt="20px"
        p="0 20px"
        display="flex "
        justifyContent="space-between"
        alignItems="center"
        >
            <Typography
            variant="h4"
            fontWeight="600"
            color={colors.grey[100]}
            >
            Exames
            </Typography>
            <IconButton onClick={handleShowExam} >
                <AddBoxIcon /> 
            </IconButton> 
        </Box>
        <Box
           style={{
            background: theme.palette.mode === "dark" ? colors.greenAccent[500] : colors.grey[800],
            }} 
            borderRadius="10px"
            p="10px"
            m="20px"
            maxHeight="170px"
            maxWidth="600px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            whiteSpace="normal"
            overflow="auto"  
            textAlign="center"
        >

            <table>
                <thead>
                    <th>Nome</th>
                    <th>Data</th>
                    <th>Ações</th>
                </thead>
                <tbody>

                    {exams.map((exam) => (
                        <tr key={exam.id}>
                            <Exam exam={exam} />
                        </tr>
                    ))}


                </tbody>
            </table>

        </Box>
        </Box>

        <Dialog open={show} onClose={handleCloseExam} fullWidth>
            <AddFormExam />
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="end"
                alignItems="center"
                mr="20px"
                mb="10px"
            >
               
                <Button onClick={handleCloseExam} variant="contained" sx={{ m: "10px", p: "10px" }}><Typography>fechar</Typography></Button>
            </Box>
            
        </Dialog>
        
        </>
    )  
}

export default ExamList;


