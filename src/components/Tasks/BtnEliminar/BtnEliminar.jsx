import React from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import '../BtnEliminar/BtnEliminar.css';


function BtnEliminar(props) {

    function eliminar() {
        if (confirm('Esta seguro De Eliminar esta tarea ?')) {

            localStorage.removeItem(props.item);
            alert("Tarea Eliminada")
            window.location.reload(false);
        }
    }

    return (
        <RiDeleteBin7Fill onClick={eliminar} className="btndelete" />
    )
}

export default BtnEliminar 
