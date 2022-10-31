import React from "react";
import '../Footer/Footer.css';

function Footer() {

    function clearAll() {
        if (confirm("Estas seguro de limpiar Todo")) {
            localStorage.clear();
            window.location.reload(false);

        }

    }

    return (
        <div className="Footer">
            <p className="p-form">you has {localStorage.length} pending tasks</p>
            <button onClick={clearAll} className="btnclear">Clear All</button>
        </div>
    )
}
export default Footer