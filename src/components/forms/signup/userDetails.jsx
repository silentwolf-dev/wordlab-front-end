import React from 'react'

const userDetails = () => {
    return (
        <form>
           <div className="form-group">
            <label htmlFor="">First name</label>
              <input 
              type="text" 
              className="form-input"
              placeholder="first name"
              />
           </div>

           <div className="form-group">
            <label htmlFor="">Lastname</label>
              <input 
              type="text" 
              className="form-input"
              placeholder="last name"
              />
           </div>

           <div className="form-group">
            <label htmlFor="">username</label>
              <input 
              type="text" 
              className="form-input"
              placeholder="username"
              />
           </div>
        </form>
    )
}

export default userDetails
