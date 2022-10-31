import React from "react";
import Task from '../Tasks/Task'
import '../TaskList/TaskList.css'

function TaskList() {
    return (
        <div className='listaTareas'>
            <center>
                <form>
                    <input className='inputTarea' type='text' placeholder="Add your new todo" />
                    <button className='buttonTarea' type='submit'> + </button>
                </form>
                <br />
                <div className='tareas'>
                    <Task tarea="buy a new gaming laptop" />
                    <Task tarea="complete a previus stask" />
                    <Task tarea="create video for youtube" />
                    <Task tarea="create a new portafolio site" />

                </div>
            </center>
        </div>
    )
}

export default TaskList