import React from "react";
import '../Tasks/Task.css'
import BtnEditar from './BtnEditar/BtnEditar';
import BtnEliminar from './BtnEliminar/BtnEliminar';
import { useState } from 'react';


function Task(props) {
    const [actualChecked, setChecked] = useState(false);
    const [actualEstado, setEstado] = useState("pendiente");

    const cambio = (e) => {
        setChecked(e.target.checked)
        if (actualChecked) {
            setEstado("pendiente");
        } else {
            setEstado("realizado");
        }
    }
    return (
        <div className={actualEstado}>
            <input onChange={cambio} type="checkbox" checked={actualChecked} className="checkbox-round" />
            <p >{props.tarea}</p>
            <div className='btns'>
                <BtnEditar tarea={props.tarea} item={props.item} />
                <BtnEliminar item={props.item} />
            </div>

        </div>
    )
}

export default Task
