// import {doc, getFirestore, updateDoc } from "firebase/firestore";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { React,  useState } from "react";


import Button from "../../button/button";
import Form from "../../form/form";

function Item({ title, price, id }) {

    const [edit, setEdit] = useState(false);
    function onEdit() {
        setEdit(!edit)
    }
    const [product, setProduct] = useState({ name: title, price: price });

    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
        const  UpdateProduct =  () => {
        const db = getFirestore()
        const queryItem = doc(db, 'products', `${id}`)
        updateDoc(queryItem, {
            "name": product.name,
            "price": product.price
        })
            
        .then(resp => console.log(resp))
        .then(console.log(product))   
        .catch(err => console.log(err))
        .finally(setEdit(!edit))
        }
    
    return (
        <div className="bg-slate-500 container justify-between  my-10">
            {edit ?
                <Form buttonText="editar" buttonClick={UpdateProduct} title={title} price={price} handleChange={handleChange} handleSubmit={handleSubmit} />
                :
        <details className="mx-20">
            <summary>
            <div className="grid grid-cols-3">
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <Button text={"editar"} clickEvent={onEdit}></Button>
            </div>    
            </summary>
            <p>this is where the description goes</p>
        </details>
            }
        </div>
  )
}

export default Item;
