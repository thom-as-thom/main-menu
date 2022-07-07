import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuItemList from "./menuItemList";

function Menu() {

    const {cat} = useParams ()
    const [loading, setLoading] = useState(true)
    const [Productos, setProductos] = useState([true])
    const [Categories, setCategories] = useState([true])


    useEffect(()=>{
        const db = getFirestore()
        const qryCollection = collection(db, 'Categories')
        getDocs(qryCollection)
        .then(resp => setCategories(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
        .catch((err) => console.log(err))
        .finally (setLoading(false))
    },[])

    useEffect(()=>{
        const db = getFirestore()
        const qryCollection = collection(db, 'products')
        let qryCollectionFilter = qryCollection
        if (cat) {
            qryCollectionFilter = query(qryCollection, where('category', '==', cat))
        }
        getDocs(qryCollectionFilter)
        .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
        .catch((err) => console.log(err))
        .finally (setLoading(false))
    },[cat])
  return (
    <div>
      {Categories.map((cat) => <MenuItemList key={cat.id} category={cat.name} productos={Productos} />)}
    </div>


  )
}

export default Menu;
