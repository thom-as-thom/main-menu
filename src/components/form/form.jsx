
import { useState } from "react";
import Button from "../button/button";

function Form({ handleChange, handleSubmit, buttonClick, buttonText,  type, categories, item}) {

	const [checked, setChecked] = useState(item.visible);
	
	function onChange(event) {
		setChecked(event.target.value)
		console.log(event.target.value)
		handleChange(event)
	}
	if (type === "producto") {
		
	}

	

	return(
	<form className="container mx-auto px-10 lg:flex lg:justify-center" onSubmit={handleSubmit}>
		<div className="grid grid-cols-4">
			<label className="text-lg m-2" htmlFor="product-name"> Nombre de {type} 
			</label>
				<input className="border-solid border-2 border-gray-600 h-7 m-2" defaultValue={item.name} type="text" name="name" onChange={handleChange} />
			<label className="text-lg m-2" htmlFor="product-price">Descripcion</label>
				{type === "Categoria" ?
					<textarea className="border-solid border-2 border-gray-600 h-7 m-2" defaultValue={item.description} name="description" onChange={handleChange} rows="1" cols="16">
					</textarea>
					:
					<>
						<input className="border-solid border-2 border-gray-600 h-7 m-2" defaultValue={item.description} type="text" name="description" onChange={handleChange} />
					
						<label htmlFor="categories">Categoria</label>
							<select id="categories" name="category" value={item.categoy} onChange={handleChange}>
								{
							categories.map((cat) => (<option key={cat.id} value={cat.name} id={cat.id} default>{cat.name} </option>))  
							}
							</select>
					</>
				}
				<div className="grid grid-cols-1">
					<label className="hidden" htmlFor="visible">  </label>
							<fieldset onChange={onChange}>
									<input type="radio" name="visible" value="true" id="true" defaultChecked={checked === true} />visible
									<input type="radio" name="visible" value="false" id="true" defaultChecked={checked === false} />no visible
							</fieldset>
				</div>
			<Button text={buttonText} clickEvent={buttonClick} id='submit' />
		</div>
	</form>          
	)
}

export default Form;
