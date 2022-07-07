// import {doc, getFirestore, updateDoc } from "firebase/firestore";
import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { React,  useState } from "react";


import Button from "../../button/button";
import Form from "../../form/form";

function Item({ title, description, id, visible, category, categories, database, type, price }) {

    const [edit, setEdit] = useState(false);
    const [erased, setErased] = useState(false);
    function onEdit() {
        setEdit(!edit)
    }
    const [Item, setItem] = useState({key: id, name: title, description: description, id:id, visible:visible, category:category, price:price });
    
    const handleChange = (event) => {
        setItem({ ...Item, [event.target.name]: event.target.value });
        console.log(Item)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
    }
    const UpdateItem = () => {

            const db = getFirestore()
            const queryItem = doc(db, `${database}`, `${id}`)
            console.log(database)
            updateDoc(queryItem, {
            "name": Item.name,
            "description": Item.description,
            "visible": Item.visible,
            "category": Item.category,
            "price": Item.price
            
        })
            
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(setEdit(!edit))
        }
    
    const  DeleteItem =  () => {
        const db = getFirestore()
        deleteDoc(doc(db, `${database}`,`${id}`))
        .then (console.log(id))
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(setErased(!erased))
        }
    
    return (
        erased ? 
            <h1>{type} borrado correctamente</h1>
            :
            <>
                <div className="bg-slate-500 container justify-between  my-10">
                    {edit ?
                        <>
                        <Form buttonText="editar" buttonClick={UpdateItem} handleChange={handleChange} handleSubmit={handleSubmit} categories={categories} item={Item} type={type} />
                        <Button text="volver" clickEvent={onEdit} />
                        </>
                    :
                        <details className="mx-20">
                            <summary>
                                <div className="grid grid-cols-3">
                                    <h1>{Item.name}</h1>
                                    {type ===  "Producto" ?
                                        <>
                                        <p>{Item.price}</p>
                                        <p>{Item.category}</p>
                                        </>
                                        :
                                        <></>}
                                    <Button text={"editar"} clickEvent={onEdit}></Button>
                                    <Button text={"borrar"} clickEvent={DeleteItem}/>
                                </div>    
                            </summary>
                            <p>{Item.description}</p>
                        </details>
                    }
                </div>
            </>
  )
}

export default Item;
