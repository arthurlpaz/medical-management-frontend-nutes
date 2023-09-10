import { createContext, useEffect } from "react";
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

//the context is used to send the data to the prescriptionList file

export const ExamContext = createContext();

const ExamContextProvider = (props) =>{


    const [exams, setExams] = useState([
        {
            id: uuidv4(), 
            name: 'nome do exame', 
            date: '10/08/2023',
            
        },
        {
            id: uuidv4(), 
            name: 'nome do exame 2', 
            date: '02/08/2023',
        }
    ])

    //sending the updated data to local storage
    useEffect(() => {
        setExams(JSON.parse(localStorage.getItem('exams')))
    }, [])

    //sending the data to local storage
    useEffect(()=>{
        localStorage.setItem('exams', JSON.stringify(exams))
    })

    const addExam = (name, date) =>{
        setExams([...exams, {id:uuidv4(), name, date}])
    }

    const deleteExam = (id) =>{
        setExams(exams.filter(exam => exam.id !== id))
    }

    const updateExam = (id, updatedExam) => {
        setExams(exams.map((exam) => exam.id === id ? updatedExam : exam))
    }

    return(
        <ExamContext.Provider value={{exams, addExam, deleteExam, updateExam}}>
            {props.children}
        </ExamContext.Provider>
    )
}

export default ExamContextProvider;