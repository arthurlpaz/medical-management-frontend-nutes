import { 
    Box, useTheme, Typography, IconButton, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel 
} from "@mui/material";

import { useContext, useState } from "react";
import { PacientContext } from "../../context/PacientsContext";


const EditFormPerfil = () =>{

    
    const {updatePerfil} = useContext(PerfilContext)
    //como mater as informações no form para que sejam editadas
    const id = thePerfil.id

    const[name, setName] = useState(thePerfil.name);
    const[email, setEmail] = useState(thePerfil.email);
    const[street, setStreet] = useState(thePerfil.street);
    const[number, setNumber] = useState(thePerfil.number);
    const[city, setCity] = useState(thePerfil.city);
    const[contact_emergency, setContactEmergency] = useState(thePerfil.contact_emergency)
    const[contact_personal, setContactPersonal] = useState(thePerfil.contact_personal)
    const[speciality, setSpeciality] = useState(thePacient.speciality)
    const[date_birthday, setDate_birthday] = useState(thePacient.date_birthday)

    const updatedPerfil = {id, name, email, street,number, city, contact_personal, contact_emergency,  speciality, date_birthday}

    const handleSubmitPerfil = (e) =>{
        e.preventDefault();
        updatePerfil(id, updatedPerfil)
    }

    return(
        <><Box>
            <FormGroup>
                <Typography m="20px" ml="28px" mb="0px" variant="h3"> Editar Prescrição</Typography>
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
                    <InputLabel><Typography variant="h5">Email</Typography></InputLabel>
                    <Input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Rua</Typography></InputLabel>
                    <Input
                        type="text"
                        name="street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Número</Typography></InputLabel>
                    <Input
                        type="text"
                        name="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Cidade</Typography></InputLabel>
                    <Input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Contato Pessoal</Typography></InputLabel>
                    <Input
                        type="text"
                        name="contact_personal"
                        value={contact_personal}
                        onChange={(e) => setContactPersonal(e.target.value)}
                        />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Contato de Emergência</Typography></InputLabel>
                    <Input
                        type="text"
                        name="contact_emergency"
                        value={contact_emergency}
                        onChange={(e) => setContactEmergency(e.target.value)}
                        />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Especialidade</Typography></InputLabel>
                    <Input
                        type="text"
                        name="speciality"
                        value={speciality}
                        onChange={(e) => setSpeciality(e.target.value)}
                        />
                </FormControl>

                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Data de Aniversário</Typography></InputLabel>
                    <Input
                        type="text"
                        name="date_birthday"
                        value={date_birthday}
                        onChange={(e) => setDate_birthday(e.target.value)}
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
                <Button onClick={handleSubmitPerfil} variant="contained" sx={{ m: "0px", p: "10px" }}><Typography>salvar</Typography></Button>
        </Box></>
    
    )

}

export default EditFormPerfil;