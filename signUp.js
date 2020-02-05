import React from 'react';
import SignupHome from './SignupHome';
import SignupSecond from './SignupSecond';

export default class signup extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
    step:1,
    signup: [],
    fullName: '', 
    email: '',
    phoneNumber: '', 
    password: '',
    description:'', 
    errorMessage: 'this is an error' }
}

nextStep = () =>{
  const { step } = this.state;
  this.setState({
    step: step + 1
  });
};

prevStep = () =>{
  const { step } = this.state;
  this.setState({
    step: step - 1
  });
};

// handleChange = input => e => {
//     this.setState({[input]: e.target.value});
// };

  // handleChange(e, name) {
  //   const{ text } = e.nativeEvent;
  //   this.setState(() =>(
  //     { [name]: text}
  //     ));
  // }

handleChange = (input, value )=> {
  this.setState({
    [input]:value
  });  
};


	render() {
    
    const { step } = this.state;
    const { fullName, email, phoneNumber, password, description} =this.state;
    const values = { fullName, email, phoneNumber, password, description}
    // console.log('values', values);
    // console.log('Master value', this.state);
    // const{values} = this.state;
    
    switch(step) {
      case 1:
        return(
          <SignupHome 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return(
          <SignupSecond
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
	}
}
