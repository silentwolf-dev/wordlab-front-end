import React from 'react'
import {
   SimpleForm, 
   FromLabel,
   Formheader,
   FromGroup,
   Input,
} from '../../ui/SimpleForm';


import {ButtonPrimary} from '../../Buttons'
const UserDetails = ({ nextStep,}) => {
    return (
        <div className="signup-form-container">
           <SimpleForm id="signup_form">
               <FromGroup>
                  <FromLabel>First name</FromLabel>
                  <Input 
                   type="text" 
                    placeholder="enter your first name"
                   />
               </FromGroup>

               <FromGroup>
                  <FromLabel>last name</FromLabel>
                  <Input 
                    type="text" 
                    placeholder="enter your last name"
                   />
               </FromGroup>

               <ButtonPrimary id="next-btn" content="next" handleClick={nextStep}/>
           </SimpleForm>
        </div>
    )
}

export default UserDetails
