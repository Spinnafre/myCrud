import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
export default props => {
    return <aside className="menu-area">
        <nav className="menu">
            <Link to="/inicio"> <i className='fa fa-home'></i> Inicio</Link>
            <Link to="/users"> <i className='fa fa-group'></i> Usuários</Link>
            <Link to="/about"> <i className='fa fa-address-card'></i> Sobre</Link>
        </nav>
    </aside>
}
