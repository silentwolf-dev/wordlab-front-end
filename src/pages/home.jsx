import { 
    SimpleForm, 
    Input
} from '../components/ui/SimpleForm'

import {ButtonPrimary, } from "../components/Buttons"
function Home(){
    return(
        <div className='home Pages'>
            <SimpleForm>
                  <ButtonPrimary/>
            </SimpleForm>
          <h1>hello world</h1>
       </div>
    )
}

export default Home