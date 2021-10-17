import {Component} from 'react'


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
        return(
          null
        )
    }
}



export default Signup