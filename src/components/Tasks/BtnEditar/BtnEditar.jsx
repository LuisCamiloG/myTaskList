import React from "react";
import { TbEdit } from "react-icons/tb";
import '../BtnEditar/BtnEditar.css'

function BtnEditar(props) {

    function editar() {

        let nuevaTarea = "";
        nuevaTarea = prompt("Edite", props.tarea);
        localStorage.setItem(props.item, nuevaTarea);
        alert("Tarea Modificada");
        window.location.reload(false);

    }

    return (
        <TbEdit onClick={editar} className="btneditar" />
    )

}

export default BtnEditar 