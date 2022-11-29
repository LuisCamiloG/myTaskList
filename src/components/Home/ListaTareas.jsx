import React from 'react'
import Title from '../Title/Title'
import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'
import Menu from './Menu'
import './Home.css'
import '../../../src/App.css'
// import '../Title/Title.css'
// import '../TaskList/TaskList.css'
// import '../Footer/Footer.css'
import './Home.css'

function ListaTareas() {
    return (
        <div className='contenedor-sobreNosotro'>
            <div className='sobre'>
                <Menu />
                <Title />
                <TaskList />
                <Footer />
            </div>
        </div>
    )
}
export default ListaTareas



