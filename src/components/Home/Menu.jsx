import './Home.css'
function Menu() {
    return (
        <div className="contenedor-sobreNosotro">
            <ul >
                <h4 className="item"><a href="/">Home</a></h4>
                <h4 className="item"><a href="/Tareas">Lista de Tareas</a></h4>
                <h4 className="item"><a href="/SobreNosotros">Sobre Nosotros</a></h4>
            </ul>
        </div>
    )
}
export default Menu