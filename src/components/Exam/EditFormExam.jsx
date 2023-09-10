
import { 
    Box, useTheme, Typography, IconButton, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel 
} from "@mui/material";
import { ExamContext } from "../../context/ExamContext";
import { useContext, useState } from "react";



const EditFormExam =({theExam}) =>{

    const {updateExam} = useContext(ExamContext)
    //como mater as informações no form para que sejam editadas
    const id = theExam.id

    const[name, setName] = useState(theExam.name);
    const[date, setDate] = useState(theExam.date);
    

    const updatedExam = {id, name, date}

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateExam(id, updatedExam)
    }

    return(
       <><Box>
            <FormGroup>
                <Typography m="20px" ml="28px" mb="0px" variant="h3"> Editar Exame</Typography>
                <FormControl sx={{ m: "20px 20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Nome</Typography></InputLabel>
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Data</Typography></InputLabel>
                    <Input
                        type="text"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        />
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
                <Button onClick={handleSubmit} variant="contained" sx={{ m: "0px", p: "10px" }}><Typography>salvar</Typography></Button>
        </Box></>
    )
}

export default EditFormExam;











