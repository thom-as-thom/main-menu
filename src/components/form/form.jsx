import React from "react";
import Button from "../button/button";

function Form({handleChange, handleSubmit, buttonClick, buttonText, title, price}) {
  return <form className="container mx-auto px-10 lg:flex lg:justify-center" onSubmit={handleSubmit}>
                        <label className="text-lg m-2" htmlFor="product-name">Nombre del producto
                        </label>
                        <input className="border-solid border-2 border-gray-600 h-7 m-2" defaultValue={title} type="text" name="name" onChange={handleChange} />
                        <label className="text-lg m-2" htmlFor="product-price">Precio</label>
                        <input className="border-solid border-2 border-gray-600 h-7 m-2" defaultValue={price} type="text" name="price" onChange={handleChange} />
                        <Button text={buttonText} clickEvent={buttonClick} id='submit' />
                    </form>                      
}

export default Form;
