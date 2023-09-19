import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";
import api from "../../src/services/service";

export const PacientContext = createContext()

const PacientContextProvider = (props) => {

    const [pacients, setPacients] = useState([])



    //sending the updated data to local storage
    useEffect(() => {
        async function fetchData() {
            const storedPacients = await api.get('/v1/athletes');
            console.log(storedPacients.data.athletes)
            if (storedPacients) {
                setPacients(storedPacients.data.athletes);
            }
        }

        fetchData();
    }, []);

    const addPacient = (newPacient) => {
        setPacients([...pacients, newPacient])
    }

    const updatePacient = (id, updatedPacient) => {
        setPacients(pacients.map((pacient) => pacient.id === id ? updatedPacient : pacient))
    }

    const deletePacient = (id) => {
        setPacients(pacients.filter(pacient => pacient.id !== id))
    }

    return (
        <PacientContext.Provider value={{ pacients, addPacient, deletePacient, updatePacient }}>
            {props.children}
        </PacientContext.Provider>
    )
}

export default PacientContextProvider;