import {Component} from 'react'
import UserDetails from './userDetails';
import Contactinfo from './Contactinfo';


class Signup extends Component {
   constructor(){
       super()
       this.nextStep = this.nextStep.bind(this)
       this.prevStep = this.prevStep.bind(this)
    }
   

    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    }

    

    nextStep(){
      const { step } =  this.state
      if(step === 2) {
        return
      }else if(step > 2) {
        this.setState({step: 0})
      }
      this.setState({step: step + 1})
    
    
      console.log(step)
    }

    prevStep(){
      const {step}= this.state;

      if(step <= 1) {
        return
      }

      this.setState({step: step - 1})
    }
    
    handleChange(input, e){
      this.setState({[input]: e.target.value})
    }

    render(){
        const {step} = this.state;
       
        switch(step){
           case 1:
               return(
               <UserDetails
                  nextStep={this.nextStep}
               />)

            case 2:
                return(
                    <Contactinfo
                      prevStep={this.prevStep}
                    />
                )

           default: 
            return(
            <UserDetails
               nextStep={this.nextStep}
            />)
              
        }
    }
}



export default Signup