import React from "react";

function Button({ text, clickEvent, id}) {
    return (
        <button className="bg-slate-300 p-2 ml-4" id={id} onClick={clickEvent}>{text}</button>
    )
}

export default Button;
