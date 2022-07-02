import { React, useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import { collection, addDoc, getFirestore, getDocs, query, where } from "firebase/firestore";

import Button from "../../button/button";
import ItemList from "../itemList/itemList";
import Form from "../../form/form";


function Products() {

    const [product, setProduct] = useState({ name: false, price: false });
    const {cat} = useParams ()
    const [loading, setLoading] = useState(false)
    const [Productos, setProductos] = useState([])
    const [change, setchange] = useState(false);
    
    

    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    function UploadProduct() {
        const db = getFirestore()
        const queryCollection = collection(db, 'products')
        setchange(!change)
        addDoc(queryCollection, product)
        .then(resp => console.log(resp))
        .catch (err => console.log (err))
    }

    useEffect(()=>{
        const db = getFirestore()
        const qryCollection = collection(db, 'products')
        let qryCollectionFilter = qryCollection
        console.log (change)
        if (cat) {
            qryCollectionFilter = query(qryCollection, where('category', '==', cat))
        }
        getDocs(qryCollectionFilter)
        .then (resp => setProductos(resp.docs.map( item => ({id: item.id, ...item.data()}))))
        .catch((err)=>console.log(err))
    },[cat, change])

    return (
        <section>
            {loading ?
                <h1>cargando</h1>
                :
                < div >
                    <div  >
                        <Form handleChange={handleChange} handleSubmit={handleSubmit} buttonClick={UploadProduct} buttonText="agregar"/>
                    </div>
                    <ItemList products={Productos } />

                </div >
            }
        </section>
  )
}

export default Products;
