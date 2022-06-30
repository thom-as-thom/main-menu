import React from "react";

function Item({title, price}) {
    return (
        <div>
            <div >
                <h1 >{title}</h1>
            </div>
            
            <p>{price}</p>

        </div>    
  )
}

export default Item;
