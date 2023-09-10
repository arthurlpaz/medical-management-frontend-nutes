import { Box, IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useContext, useEffect } from "react";
import { ExamContext } from "../../context/ExamContext";
import { useState } from "react";
import EditFormExam from "./EditFormExam";
import { Typography, Button,
    Dialog,
} from "@mui/material";


const Exam = ({exam}) =>{
    
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)  

    const {deleteExam} = useContext(ExamContext)

    useEffect(() =>{
        handleClose()
    }, [exam]) 


    return(
        <>
        <td>{exam.name}</td>
        <td>{exam.date}</td>
        <td><IconButton onClick={handleShow} ><EditIcon /></IconButton>
            <IconButton onClick={() => deleteExam(exam.id)} ><DeleteIcon /></IconButton></td>
        
        <Dialog open={show} onClose={handleClose} fullWidth>
            <EditFormExam theExam={exam} />
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

export default Exam;