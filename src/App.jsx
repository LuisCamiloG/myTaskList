import React from "react";
import Title from './components/Title/Title'
import TaskList from './components/TaskList/TaskList'
import Footer from './components/Footer/Footer'
import '../src/App.css'

function App() {
    return (
        <div className="App">
            <Title />
            <TaskList />
            <Footer />
        </div>
    );
}

export default App;