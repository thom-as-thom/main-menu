import {React, useState} from "react";
import Button from "../../button/button";
import Form from "../../form/form";

function Item({ title, price }) {
    const [edit, setEdit] = useState(false);
    function onEdit() {
        setEdit(!edit)
    }
    
    return (
        <div className="bg-slate-500 container justify-between  my-10">
            {edit ?
                <Form buttonText="editar" buttonClick={onEdit}/>
                :
        <details className="mx-20">
            <summary>
            <div className="grid grid-cols-3">
                <h1>{title}</h1>
                <p>{price}</p>
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
