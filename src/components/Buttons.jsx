
import React from 'react'
import "../styles/ui/index.css"



export const ButtonPrimary = ({type, content, handleClick, id}) => {
    return (
        <button 
         id={id || null}
         type={type || "button"}
         className="button-primary"
         onClick={handleClick || null}
         >
           {content || "button"}
        </button>
    )
}


