import { React, useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import { collection, addDoc, getFirestore, getDocs, query, where } from "firebase/firestore";


import ItemList from "../itemList/itemList";
import Form from "../../form/form";
import Button from "../../button/button";


function Products() {

    const [product, setProduct] = useState({ name: false, price: false });
    const {cat} = useParams ()
    const [loading, setLoading] = useState(true)
    const [Productos, setProductos] = useState([true])
    const [change, setchange] = useState(false);

    const [addedProduct, setAddedProduct] = useState(false)

    function yes (){
        setAddedProduct(false)
    }

    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    function UploadProduct() {
        const db = getFirestore()
        const queryCollection = collection(db, 'products')
        addDoc(queryCollection, product)
        .then(resp => console.log(resp))
        .then(setchange(!change))
        .then(setAddedProduct(true))
        .catch (err => console.log (err))
    }

    // const  UpdateProduct =  ( id, edit, setEdit) => {
    //     const db = getFirestore()
    //     const queryItem = doc(db, 'products', `${id}`)
    //     setchange(!change)
    //     updateDoc(queryItem, {
    //         "name": product.name,
    //         "price": product.price
    //     })
            
    //     .then(resp => console.log(resp))
    //     .catch(err => console.log(err))
    //     .finally(setEdit(!edit))
    // }

    useEffect(()=>{
        const db = getFirestore()
        const qryCollection = collection(db, 'products')
        let qryCollectionFilter = qryCollection
        console.log (change)
        if (cat) {
            qryCollectionFilter = query(qryCollection, where('category', '==', cat))
        }
        getDocs(qryCollectionFilter)
            .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
        .catch((err) => console.log(err))
        .finally (setLoading(false))
    },[cat, change])
    
    return (
        <section>
                < div >
                        {addedProduct
                            ?
                            <div>
                            <h1>Producto agregado correctamente</h1>
                            <Button text="continuar" clickEvent={yes}/>
                            </div>
                            :
                            <Form handleChange={handleChange} handleSubmit={handleSubmit} buttonClick={UploadProduct} buttonText="agregar" />
                        }
                        {loading ?
                        <h1 className="bg-red-500">cargando...</h1>
                        :
                            <ItemList products={Productos}  />
                        }
                </div >
        </section>
  )
}

export default Products;
