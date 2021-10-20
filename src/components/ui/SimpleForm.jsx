import React from 'react'
import "../../styles/ui/index.css"


export const Input = ({type, handleClick, placeholder})=>{
    return(
        <input 
          type={type || "text"}
          className="ui_form-input"
          placeholder={placeholder}
          onClick={handleClick || null}
        />
    )
}

export const SimpleForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit || null}  className="simpleform_ui">
           {props.children}
        </form>
    )
}


