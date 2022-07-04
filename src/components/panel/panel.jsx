import { React, useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import { collection, addDoc, getFirestore, getDocs, query, where } from "firebase/firestore";

import Form from "../form/form";
import Button from "../button/button"
import ItemList from "../admin/itemList/itemList"

function Panel({type, dataBase}) {

    const [item, setItem] = useState({ name: "nombre", description: "descripcion", visible: true, category: "sin definir" });
    const {cat} = useParams ()
    const [loading, setLoading] = useState(true)
    const [Productos, setProductos] = useState([true])
    const [Categories, setCategories] = useState([true])
    const [change, setchange] = useState(false);
    const [addedItem, setAddedItem] = useState(false)

    function yes (){
        setAddedItem(false)
    }

    const handleChange = (event) => {
        setItem({ ...item, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    function UploadItem() {
        const db = getFirestore()
        const queryCollection = collection(db, `${dataBase}`)
        addDoc(queryCollection, item)
        .then(setchange(!change))
        .then(setAddedItem(true))
        .catch (err => console.log (err))
    }

    useEffect(()=>{
        const db = getFirestore()
        const qryCollection = collection(db, 'Categories')
        getDocs(qryCollection)
        .then(resp => setCategories(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
        .catch((err) => console.log(err))
        .finally (setLoading(false))
    },[change])

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
    },[cat, change])
    
    return (
        <section>
            < div >
                {addedItem ?
                        <div>
                        <h1> {type} agregado correctamente</h1>
                        <Button text="continuar" clickEvent={yes}/>
                        </div>
                    :
                        <Form handleChange={handleChange} handleSubmit={handleSubmit} buttonClick={UploadItem} buttonText="agregar" type={type} categories={Categories} item={item} />
                }
                {loading ?
                    <h1>cargando...</h1>
                    :
                    <ItemList products={Productos} categories={Categories} type={type} dataBase={dataBase}/>
                }
            </div >
        </section>
)
}

export default Panel;