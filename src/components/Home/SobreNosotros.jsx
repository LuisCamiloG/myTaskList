import Menu from "../Home/Menu"
import './Home.css'
function SobreNosotros() {
    return (
        <div className="contenedor-sobreNosotros">
            <Menu />
            <div className="sobre">

                <h2>Sobre Nosotros</h2>
                <strong>Descripcion</strong>
                <p>Todo App es una herramienta para guardar, elimiar y editar tareas del dia a dia</p>
                <strong>Funciones</strong>
                <ol>
                    <li>Guarda, edita, muestra y elimina tareas de forma segura.</li>
                    <li>Las tareas cuentan con un estado el cual puedes cambiar segun lo quiera el usuario</li>
                    <li>Te indica en tiempo real el numero de tareas que tienes pendientes.</li>
                    <li>Es un sistema practico y de uso facil.</li>
                </ol>
                <strong>Este sistema fue desarrollado con JavaScript</strong>
            </div>


        </div>
    )
}

export default SobreNosotros