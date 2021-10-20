
import React from 'react'
import "../styles/ui/index.css"



export const ButtonPrimary = ({type, content, handleClick}) => {
    return (
        <button 
         type={type || "button"}
         className="button-primary"
         onClick={handleClick || null}
         >
           {content || "button"}
        </button>
    )
}


