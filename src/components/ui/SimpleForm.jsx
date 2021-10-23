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

export const FromError = ({children})=>{
    return(
      <span className="ui_error">
         {children}
      </span>
    )
}


export const FromGroup = ({id, children}) =>{
    return(
        <div 
         id={id || "no_id"}
         className="ui_form-group"
        >
            {children}
        </div>
    )
}

export const FromLabel = ({htmlFor, children})=>{
  return (
      <label htmlFor={htmlFor || ""} className="ui_form-label">{children}</label>
  )
}


export const Formheader = ({title})=>{
  return(
      <div className="ui_from-header">
           <h1 className="ui_sf-title">{title || " form title"}</h1>
           <div className="ui_sf-divider"></div>
      </div>
  )
}

export const SimpleForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit || null} id={props.id || null} className="simpleform_ui">
           {props.children}
        </form>
    )
}


