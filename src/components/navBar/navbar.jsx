import React from "react";
import {Link} from 'react-router-dom'

function Navbar({ categories }) {
    console.log(categories)
    return (
        <nav className="container mx-auto bg-slate-500 ">
        <ul className="flex justify-evenly">
            {
                categories.map((cat) => <li className="m-1 p-1" key={cat.id}>{cat.name}</li> )
            }
        </ul>
        </nav>
  )
}

export default Navbar;
