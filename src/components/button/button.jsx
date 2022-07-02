import React from "react";

function Button({ text, clickEvent, id}) {
    return (
        <button className="bg-slate-300 p-2 m-2" id={id} onClick={clickEvent}>{text}</button>
    )
}

export default Button;
