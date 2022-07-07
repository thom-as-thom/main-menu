import React from "react";

function MenuItem({ product }) {
    return (
        <div>
            {
                product.visible === "true" ?
                    
                <div className="grid grid-cols-2 bg-orange-300 m-4">
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <h3>{product.description}</h3>
                </div>
                    :
                <></>    
            }            
    </div>

    )
}

export default MenuItem;
