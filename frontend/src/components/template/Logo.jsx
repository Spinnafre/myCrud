import './Logo.css'
import React from 'react'
import Logo from '../../assets/imgs/test.png'
import {Link} from 'react-router-dom'
export default props=>{
    return <aside className="logo">
        <Link to="/inicio" className='logo'>
            <img src={Logo} alt="Logo" />
        </Link>
    </aside>
}