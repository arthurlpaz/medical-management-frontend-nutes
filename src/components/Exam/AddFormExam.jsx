
import { 
    Box, useTheme, Typography, IconButton, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel 
} from "@mui/material";
import { ExamContext } from "../../context/ExamContext";
import { useContext, useState } from "react";



const AddFormExam =() =>{

    const {addExam} = useContext(ExamContext)
    const [newExam, setNewExam] = useState({
        name:"", date:""
    })

    const onInputChange = (e) =>{
        setNewExam({...newExam, [e.target.name]: e.target.value})
    }
    const {name, date} = newExam

    const handleSubmitExam = (e) =>{
        e.preventDefault()
        addExam(name, date)
    }


    return(
       <><Box>
            <FormGroup>
                <Typography m="20px" ml="28px" mb="0px" variant="h3"> Adicionar Exame</Typography>
                <FormControl sx={{ m: "20px 20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Nome</Typography></InputLabel>
                    <Input
                        type="text"
                        name="name"
                        onChange={(e) => onInputChange(e)}
                        value={name} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Data</Typography></InputLabel>
                    <Input
                        type="text"
                        name="date"
                        onChange={(e) => onInputChange(e)}
                        value={date} />
                </FormControl>

            </FormGroup>
        </Box>
        
        <Box
            display="flex"
            justifyContent="end"
            flexDirection="row"
            alignItems="center"
            mr="30px"
            mb="0px"
        >
                <Button onClick={handleSubmitExam} variant="contained" sx={{ m: "0px", p: "10px" }}><Typography>salvar</Typography></Button>
        </Box></>
    )
}

export default AddFormExam;


