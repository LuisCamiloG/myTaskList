import React from "react";
import Task from '../Tasks/Task'
import '../TaskList/TaskList.css'
import { useState, useEffect } from 'react';

function TaskList() {

    let Data = [];
    let ultimo = 0;

    function Mostrar() {

        for (const i in localStorage) {
            if (!isNaN(i)) {
                ultimo = Number(i)
                Data.push(localStorage.getItem(i))
            }
        }

        console.log(Data)

    }


    Mostrar();


    const [texto, setTexto] = useState("");
    const [contador, setContador] = useState(Data.length);

    const handelImputChange = ({ target }) => {
        setTexto(target.value)
    }

    useEffect(() => {
        console.log(contador)
    }, [contador])


    function guardar(e) {
        if (texto !== "") {
            localStorage.setItem(contador, texto)
            alert("Nueva Tarea agregada");
            setTexto("")
            setContador(ultimo + 1);
            Mostrar()

        } else {
            alert("Añada una descripcion")
        }
    }

    function BuscarId(x) {
        for (const key in localStorage) {
            if (localStorage.getItem(key) === x) {
                return key

            }
        }
    }

    return (

        <div className='listaTareas'>
            <center>
                <form onSubmit={guardar}>
                    <input className='inputTarea' value={texto} type='text' onChange={handelImputChange} placeholder="Add your new todo" />
                    <button className='buttonTarea' type='submit'> + </button>
                </form>
                <br />
                <div id="tareas" className='tareas'>
                    {Data.length > 0 ? (
                        Data.map((x, index) =>
                        (
                            x ? (
                                <Task key={index} item={BuscarId(x)} tarea={x} />
                            ) : (<></>)

                        )
                        )
                    ) : (
                        <p>No hay tareas</p>
                    )

                    }
                </div>
            </center>
        </div>
    )

}
export default TaskList;