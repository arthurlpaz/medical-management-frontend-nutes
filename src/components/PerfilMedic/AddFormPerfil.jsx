import { 
    Box, useTheme, Typography, IconButton, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel 
} from "@mui/material";

import { useContext, useState } from "react";
import { PacientContext } from "../../context/PacientsContext";


const AddFormPerfil = () =>{

    
    const {addPerfil} = useContext(PerfilContext)

    const [newPerfil, setNewPerfil] = useState({
        name:"", email:"", street:"", number:"", city:"",contact_personal:"" , contact_emergency:"" ,  speciality: "", date_birthday: ""
    })

    const onInputChange = (e) =>{
        setNewPerfil({...newPerfil, [e.target.name]: e.target.value})
    }
    const {name, email, street,number, city, contact_personal, contact_emergency,  speciality, date_birthday} = newPerfil

    const handleSubmitPerfil = (e) =>{
        e.preventDefault()
        addPerfil(name, email, street,number, city, contact_personal, contact_emergency,  speciality, date_birthday)
    }

    return(
        <><Box>
            <FormGroup >
                <Typography m="20px" ml="28px" mb="0px" variant="h3"> Adicionar Informações do Perfil</Typography>
                
                <FormControl sx={{ m: "20px 20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Nome</Typography></InputLabel>
                    <Input
                        type="text"
                        name="name"
                        onChange={(e) => onInputChange(e)}
                        value={name} />
                </FormControl>
                
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Email</Typography></InputLabel>
                    <Input
                        type="text"
                        name="email"
                        onChange={(e) => onInputChange(e)}
                        value={email} />
                </FormControl>
                
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Rua</Typography></InputLabel>
                    <Input
                        type="text"
                        name="street"
                        onChange={(e) => onInputChange(e)}
                        value={street} />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Número</Typography></InputLabel>
                    <Input
                        type="text"
                        name="number"
                        onChange={(e) => onInputChange(e)}
                        value={number} />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Cidade</Typography></InputLabel>
                    <Input
                        type="text"
                        name="city"
                        onChange={(e) => onInputChange(e)}
                        value={city} />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Contato Pessoal</Typography></InputLabel>
                    <Input
                        type="text"
                        name="contact_personal"
                        onChange={(e) => onInputChange(e)}
                        value={contact_personal} />
                </FormControl>
                
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Contato de Emergência</Typography></InputLabel>
                    <Input
                        type="text"
                        name="contact_emergency"
                        onChange={(e) => onInputChange(e)}
                        value={contact_emergency} />
                </FormControl>
                
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Especialidade</Typography></InputLabel>
                    <Input
                        type="text"
                        name="speciality"
                        onChange={(e) => onInputChange(e)}
                        value={speciality} />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Data do Aniversário</Typography></InputLabel>
                    <Input
                        type="text"
                        name="date_birthday"
                        onChange={(e) => onInputChange(e)}
                        value={date_birthday} />
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
                <Button onClick={handleSubmitPerfil} variant="contained" sx={{ m: "0px", p: "10px" }}><Typography>salvar</Typography></Button>
        </Box></>
    
    )

}

export default AddFormPerfil;