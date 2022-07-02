import React from "react";
import Item from "../item/Item";

function ItemList({products}) {
  

    return (
      <div className="itemlist">
        {
          products.map((prod) => <Item key={prod.id} title={prod.name} price={prod.price} id={prod.id} />)  
        }
    </div>
  )
}

export default ItemList;
