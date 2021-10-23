import {
   SimpleForm,
   FromGroup,
   Input,
   Formheader,
   FromError,
   FromLabel,
} from '../ui/SimpleForm';

import {ButtonPrimary} from "../Buttons"

const LoginForm = ()=>{
    return(
        <div className="login-form-container">
           <SimpleForm>
              <Formheader title="Login"/>
              <FromGroup>
                <FromLabel>email:</FromLabel>
                  <Input
                    placeholder="Email"
                  />
                  <FromError>test</FromError>
              </FromGroup>
              <FromGroup>
                <FromLabel>password:</FromLabel>
                  <Input
                    type="password"
                    placeholder="password"
                  />
                  <FromError>test</FromError>
              </FromGroup>

              <ButtonPrimary type="submit" id="login-submit" />
           </SimpleForm>
        </div>
    )
}


export default LoginForm;