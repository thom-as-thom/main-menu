import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {

    const isAdmin = true


    return (
        <nav className="container mx-auto bg-slate-500 m-3 p-2">
        <ul className="flex justify-evenly">
            <Link to='/admin/categories'><li className={isAdmin?"":"hidden" }>categorias</li></Link>
            <Link to='/admin/productos'><li className={isAdmin?"":"hidden" }>productos</li></Link>
            <Link to='/'><li>carta</li></Link>
            <Link to='/reservas'><li>reservas</li></Link>
            <Link to='/admin'><li>admin</li></Link>
            <Link to='/admin/configuracion'><li className={isAdmin?"":"hidden" }>configuracion</li></Link>
            <Link to='/admin/horarios'><li className={isAdmin?"":"hidden" }>horarios</li></Link>
            <Link to='/admin/mi-plan'><li className={isAdmin?"":"hidden" }>mi-plan</li></Link>
        </ul>
        </nav>
  )
}

export default Navbar;
