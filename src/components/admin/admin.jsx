import React from "react";


function Admin() {
    const user = "Thomas"
    const payed = true

    
    
    return (
        <>
            <div className="container bg-slate-400 mx-auto m-2 p-2 text-center">
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
