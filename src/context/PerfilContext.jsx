import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";

export const PerfilContext = createContext()

const PerfilContextProvider = (props) =>{

    const [perfils, setPerfils] = useState([
        {
            id: uuidv4(),
            name: 'Nome do Médico',
            age: 22, 
            genre: 'Masculino',
            height: 1.77, 
            weight: 78, 
            email: 'medico@gmail.com',
            adress: { 
                street: 'rua alguma coisa', 
                number: '123', 
                city: 'Campina Grande' 
            }, 
            contact_emergency: '83999018176', 
            contact_personal: '83999018179', 
            speciality: "Médico geral" }
    ])

    //sending the updated data to local storage
    useEffect(() => {
        setPerfils(JSON.parse(localStorage.getItem('perfils')))
    }, [])

    //sending the data to local storage
    useEffect(()=>{
        localStorage.setItem('perfils', JSON.stringify(perfils))
    })

    const addPerfil = ( name, email, street,number, city, contact_personal, contact_emergency,  speciality, date_birthday) => {
        setPerfils([ ...perfils, {id: uuidv4(),  name, email, street,number, city, contact_personal, contact_emergency,  speciality, date_birthday}])
    }

    const updatePerfil = (id, updatedPerfil) =>{
        setPerfils(perfils.map((perfil) => perfil.id === id ? updatedPerfil : perfil ))
    }

    const deletePerfil = (id) =>{
        setPerfils(perfils.filter(perfil => perfil.id !== id))
    }

    return(
        <PerfilContext.Provider value={{perfils, addPerfil, deletePerfil, updatePerfil}}>
            {props.children}
        </PerfilContext.Provider>
    )
}

export default PerfilContextProvider;