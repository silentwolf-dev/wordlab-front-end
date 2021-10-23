
import {
  SimpleForm,
  FromGroup,
  Formheader,
  FromLabel,
  Input,
} from '../../ui/SimpleForm'

import {ButtonPrimary} from '../../Buttons'
const Contactinfo = ({prevStep}) => {
    return(
        <div className="signup-form-container">
           <SimpleForm id="signup_form">
               <Formheader title="contact info"/>
               <FromGroup>
                   <FromLabel>
                       Email
                   </FromLabel>

                   <Input
                    type="email"
                    placeholder="enter your email"
                   />
               </FromGroup>

               <FromGroup>
                   <FromLabel>
                       Password
                   </FromLabel>

                   <Input
                    type="password"
                    placeholder="enter your password"
                   />
               </FromGroup>
               <ButtonPrimary content="back" id="back-btn" handleClick={prevStep}/>
               <ButtonPrimary content="submit" id="next-btn"/>
           </SimpleForm>
        </div>
    )
}

export default Contactinfo
