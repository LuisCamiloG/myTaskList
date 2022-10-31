import React from "react";
import '../Tasks/Task.css'
import BtnEditar from './BtnEditar/BtnEditar';
import BtnEliminar from './BtnEliminar/BtnEliminar';

function Task(props) {
    return (
        <div className='tarea'>
            <input type="checkbox" className="checkbox-round" />
            <p>{props.tarea}</p>
            <div className='btns'>
                <BtnEditar />
                <BtnEliminar />
            </div>
        </div>
    )
}

export default Task
