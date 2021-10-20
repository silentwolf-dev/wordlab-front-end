import {Component} from 'react'
import FormContainer from '../FormContainer';

class Signup extends Component {

    state = {
        step: 1,
        firstname: '',
        lastname: '',
        username: '',
        Email: '',
        password: '',
    }

    nextStep(){
        const {step} = this.state;
        this.setState({step: step + 1})
    }

    prevStep(){
        const {step}= this.state;

        this.setState({step: step + 1})
    }
    
    render(){
       // const {step} = this.state;

        return null
    }
}



export default Signup