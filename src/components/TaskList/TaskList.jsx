import React from "react";
import Task from '../Tasks/Task'
import '../TaskList/TaskList.css'
import { useState, useEffect } from 'react';
import useTask from "../../Hooks/useTask";

function TaskList() {


    let Data = [];
    let lastDate = 0;

    function Mostrar() {

        for (const i in localStorage) {
            if (!isNaN(i)) {
                lastDate = Number(i)
                let array = JSON.parse(localStorage.getItem(i));
                Data.push(array)
            }
        }

        console.log(Data)

    }

    Mostrar();

    /* --------------------------------------------------------------------------------------------------- */


    const [texto, setTexto] = useState("");
    const [contador, setContador] = useState(Data.length);
    const [description, setDescription] = useState("");
    const [errorCheck, setErrorCheck] = useState("Ingresa minino 3 caracteres!");

    const { guardar } = useTask(contador, texto, setTexto, setContador, description, setDescription)
    const handelImputChange = (e) => {
        e.preventDefault()
        setTexto(e.target.value)
        console.log(texto.length);
        if (texto.length > 1) {
            setErrorCheck("")
        } else {
            setErrorCheck("Ingresa minino 3 caracteres!")
        }

        // const value = e.target.value
        // setErrorCheck({
        //     ...errorCheck,
        //     texto: e.target.length < 3 ? "Minimo 3 caracteres" : ""
        // })
        // setTexto(value)

    }
    const isvalidedForm = errorCheck.split('!').every(value => value === "");
    console.log(isvalidedForm);

    //Capturar el texto ingresado en el input

    //Capturar texto ingresado en la description
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
        console.log(e.target.value)
    }

    // Actualiza el contador de la lista de tareas
    useEffect(() => {
        // console.log(contador)
    }, [contador])


    // function guardar(e) {
    //     if (texto !== "") {
    //         localStorage.setItem(contador, texto)
    //         alert("Nueva Tarea agregada");
    //         setTexto("")
    //         setContador(lastDate + 1);
    //         Mostrar()

    //     } else {
    //         alert("Añada una description")
    //     }
    // }

    function BuscarId(x) {
        for (const key in localStorage) {
            if (localStorage.getItem(key) === x) {
                return key

            }
        }
    }
    console.log(errorCheck);

    return (

        <div className='listaTareas'>
            <div>
                <form onSubmit={guardar}>
                    <input className='inputTarea' value={texto} type='text' onChange={handelImputChange} placeholder="Add your new todo" />
                    <br />
                    {errorCheck && (<span style={{ color: 'red' }}>{errorCheck}</span>)}
                    <input type="text" className="inputTarea" value={description} onChange={handleDescriptionChange} placeholder="Ingresa una description" />
                    <button className='buttonTarea' type='submit' disabled={!isvalidedForm}> + </button>
                </form>
                <br />
                <div id="tareas" className='tareas'>
                    {Data.length > 0 ? (
                        Data.map((x, index) =>
                        (
                            x ? (
                                <Task key={index} item={BuscarId(x)} tarea={x[0]} description={x[1]} />
                            ) : (<></>)

                        )
                        )
                    ) : (
                        <p>No hay tareas</p>
                    )

                    }
                </div>
            </div>
        </div>
    )

}
export default TaskList;