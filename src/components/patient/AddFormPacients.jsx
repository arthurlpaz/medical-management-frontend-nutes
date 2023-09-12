import {
    Box, useTheme, Typography, IconButton, Button, MenuItem,
    Dialog, FormControl, FormGroup, Input, InputLabel, Select
} from "@mui/material";

import { useContext, useState } from "react";
import { PacientContext } from "../../context/PacientsContext";
import api from "../../services/service";


const AddFormPacients = () => {


    const { addPacient } = useContext(PacientContext)

    const [newPacient, setNewPacient] = useState({
        name: "", age: "", genre: "", height: "", weight: "", email: "", street: "", number: "", city: "", contact_emergency: "", contact_personal: "", injured: ""
    })

    const onInputChange = (e) => {
        setNewPacient({ ...newPacient, [e.target.name]: e.target.value })
    }
    const { name, email, street, number, city, age, genre, height, weight, contact_emergency, contact_personal, injured } = newPacient

    const handleSubmitPres = async (e) => {
        e.preventDefault()

        const injuredValue = injured === "true";

        try {
            const response = await api.post("/v1/athletes/", newPacient)

            if (response.status === 201) {
                // Limpar form após sucesso
                setNewPacient({
                    name: "",
                    age: "",
                    genre: "",
                    height: "",
                    weight: "",
                    email: "",
                    street: "",
                    number: "",
                    city: "",
                    contact_emergency: "",
                    contact_personal: "",
                    injured: injuredValue
                });

                addPacient(newPacient);

                alert("Paciente adicionado com sucesso!");
            }
            else {
                // Se o servidor respondeu com um código de status diferente de 201
                console.error("Erro ao adicionar paciente. Código de status:", response.status);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <><Box>
            <FormGroup >
                <Typography m="20px" ml="28px" mb="0px" variant="h3"> Adicionar Prescrição</Typography>
                <FormControl sx={{ m: "20px 20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Nome</Typography></InputLabel>
                    <Input
                        type="text"
                        name="name"
                        onChange={(e) => onInputChange(e)}
                        value={name} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Idade</Typography></InputLabel>
                    <Input
                        type="number"
                        name="age"
                        onChange={(e) => onInputChange(e)}
                        value={age} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Gênero</Typography></InputLabel>
                    <Select
                        name="genre"
                        onChange={(e) => onInputChange(e)}
                        value={newPacient.genre}
                    >
                        <MenuItem value="">Selecione o Gênero</MenuItem>
                        <MenuItem value="Masculino">Masculino</MenuItem>
                        <MenuItem value="Feminino">Feminino</MenuItem>
                        <MenuItem value="Outro">Outro</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Altura</Typography></InputLabel>
                    <Input
                        type="number"
                        name="height"
                        onChange={(e) => onInputChange(e)}
                        value={height} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Peso</Typography></InputLabel>
                    <Input
                        type="number"
                        name="weight"
                        onChange={(e) => onInputChange(e)}
                        value={weight} />
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
                    <InputLabel><Typography variant="h5">Lesionado</Typography></InputLabel>
                    <Input
                        type="boolean"
                        name="injured"
                        onChange={(e) => onInputChange(e)}
                        value={injured} />
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
                <Button onClick={handleSubmitPres} variant="contained" sx={{ m: "0px", p: "10px" }}><Typography>salvar</Typography></Button>
            </Box></>

    )
}

export default AddFormPacients;