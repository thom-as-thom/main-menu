import React from "react";
import Item from "../item/Item";

function ItemList({products, categories, type, dataBase,}) {
  

    return (
      <div className="itemlist">
        { type === "Producto" ?
          products.map((item) => <Item key={item.id} title={item.name} type={type} visible={item.visible} price={item.price} category={item.category} database={dataBase} description={item.description} id={item.id} categories={categories} />)  
          :
          categories.map((item) => <Item key={item.id} title={item.name} type={type} visible={item.visible} price={item.price} category={item.category} database={dataBase}  description={item.description} id={item.id} categories={categories} />)  
        }
    </div>
  )
}

export default ItemList;
