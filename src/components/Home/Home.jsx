import Menu from "../Home/Menu"
import '../Home/Home.css'
function Home() {
    return (
        <div className="contenedor-sobreNosotro">
            <div className="div">
                <Menu />
            </div>
            <div className="todoApp">
                <h1>Todo App</h1>
                <br />
                <p>Bienvenido a Todo App</p>
            </div>
        </div>

    )
}
export default Home