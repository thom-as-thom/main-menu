import React from "react";
import Navbar from "../navBar/navbar";


function Admin() {
    const user = "thomas"
    const payed = true

    const categories = [
        { id: 1, name: 'categorias', adress: '/admin/categorias' },
        { id: 2, name: 'productos', adress: '/admin/productos' },
        { id: 3, name: 'configuracion', adress: '/admin/configuracion' },
        { id: 4, name: 'horarios', adress: '/admin/horarios' },
        { id: 5, name: 'mi plan', adress: '/admin/mi-plan' },
        { id: 6, name: 'carta', adress: '/' },
    ]
    
    return (
        <>
            <Navbar categories={categories} />
            <div className="container bg-slate-400 mx-auto m-2 p-2">
            <h1>Beinvenido {user}!</h1>
            {payed ? 
                <h2>Tu plan esta al dia</h2>
                :
                <h2>Tu plan esta vencido, por favor regulariza tus pagos</h2>}
            </div>
        </>
)
}

export default Admin;
