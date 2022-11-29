import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import SobreNosotros from "../Home/SobreNosotros"
import ListaTareas from "../Home/ListaTareas"

function Enrutador() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Tareas" element={<ListaTareas />} />
                <Route path="/Sobrenosotros" element={<SobreNosotros />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Enrutador