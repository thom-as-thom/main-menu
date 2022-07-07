import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import MenuItem from "./menuItem";

function MenuItemList({ category}) {
  
const [productos, setProductos]= useState([])
 useEffect(()=>{
        const db = getFirestore()
        const qryCollection = collection(db, 'products')
        let qryCollectionFilter = qryCollection
        if (category) {
            qryCollectionFilter = query(qryCollection, where('category', '==', category))
        }
        getDocs(qryCollectionFilter)
        .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
        .catch((err) => console.log(err))

    },[category])

    return (
        <div>
            {category === "sin definir" ?
                <>
                </>
                :
                <>
                    <h1>{category}</h1>
                    {productos.map((prod) => 
                        <MenuItem key={prod.id} product={prod} />
                    )}
                </>
            }
        </div>
        )
            
}

export default MenuItemList;
