import React from 'react';
import { Text,
          View,
          StyleSheet,
          ScrollView,
          TouchableOpacity, } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';          
import {widthPercentageToDP as wp, 
        heightPercentageToDP as hp,
        listenOrientationChange as loc,
        removeOrientationListener as rol} 
from 'react-native-responsive-screen';
import firebase from 'react-native-firebase';


export default class Home extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    signup:[],
    email: '',
    password: '',
    fieldNotEmpty: false,
    
  }
    this.ref = firebase.firestore().collection('signup')
}
checkUser =() => {
  let db = firebase.firestore();
  let signupRef = db.collection('signup');
  let userEmail = this.state.email;
  let verifyPassword = this.state.password;
  let query = signupRef.where('email', '==', userEmail ).where('password', '==', verifyPassword ).get()
  .then(snapshot => {
    validUserStatus=0;
    if (snapshot.empty) {
      alert('Invalid Id');
      validUserStatus=1;
      return;
    } 
    else
    {
      validUserStatus=0;
      this.props.navigation.navigate('chatNavigator')
      return;
    } 
    // snapshot.forEach(doc => {
    //   console.log(doc.id, '=>', doc.data());
    // });
  })
  .catch(err => {
    //console.log('Error getting documents', err);
    return 0;
  });
}

// check Textfields are not empty

requireField = () =>{


  if(this.state.email !=='' && this.state.password !==''){
    
    this.props.navigation.navigate('homeFixed');
    this.setState({
      fieldNotEmpty: false,
    });
    this.fieldRef.clear();
  }
  else{
    this.setState({
      fieldNotEmpty: true
    });
    //alert('please enter the email id and password');
  }
}


handleLogin = () => {
  this.checkUser();
    // if(validUserStatus == 1){
    //   alert('Register please');
    //   this.props.navigation.navigate('signup');
    // }
    // else{
    //   this.props.navigation.navigate('homeFixed');
    // }
    //validUserStatus=0;
}

fieldRef = React.createRef();

onSubmit = () => {
  let { current: field } = this.fieldRef;

  console.log(field.value());
};

formatText = (text) => {
  // return text.replace(/[^+\d]/g, '');
  return text.clear();
};


  componentDidMount() {
    loc(this);
  }
  
  componentWillUnMount() {
    rol();
  }
  render() {
    return (
    <ScrollView style={styles.container}> 
      <View style={styles.TitleDiv}>
        <Text style={styles.title}>TheMyth</Text>
        <Text style={styles.titleSub}>Sign in to your account</Text>
      </View>
      <View style={styles.TextInputDiv}>                 
        <TextField 
        label='Email'
        onSubmitEditing={this.onSubmit}
        ref={input => {this.fieldRef = input}}
        containerStyle={{ width: wp('70%')}}
        textColor='#FCD705'
        baseColor="white"
        tintColor="#FCD705"
        onChangeText={(text) => this.setState({ email:text })}
        value={this.state.email}
        />
        <TextField 
        label='Password'
        onSubmitEditing={this.onSubmit}
        ref={input => {this.fieldRef = input}}
        containerStyle={{ width: wp('70%'),}}
        textColor='#FCD705'
        baseColor="white"
        tintColor="#FCD705"
        maxLength={8}
        secureTextEntry={true}
        onChangeText={(text) => this.setState({ password:text })}
        value={this.state.password}
        />
        { this.state.fieldNotEmpty == true ? (
          <Text style={{color:'red'}}>Please enter email and password</Text>
        ):(
          <View></View>
        )}
      </View>
      <TouchableOpacity style={styles.ForgotPassDiv}>  
        <Text style={styles.ForgotPass}
        >Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.but}>
        <TouchableOpacity onPress={() => this.requireField()}>       
       {/*  this.props.navigation.navigate('homeFixed') */}
          <Text style={styles.butText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.socialAccount}>Or create account using social media</Text>
      </View>
      <View style={styles.socialIconDiv}>
        <TouchableOpacity>
          <Text style={{ paddingRight: 40, }}>  
            <FontAwesome5 style={styles.fontFacebook} name={'facebook-square'} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>  
          <FontAwesome5 style={styles.fontInsta} name={'instagram'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ paddingLeft: 40, }}>  
            <FontAwesome5 style={styles.fontGoogle} name={'google-plus'} />
          </Text>
        </TouchableOpacity>  
      </View>             
      <View style={styles.CreateDiv}>
          <View>
            <Text style={styles.pass}>Don't have an account?</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')} >  
            <Text style={styles.pass2}>Create</Text>
          </TouchableOpacity>
      </View>                          
    </ScrollView>      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex:1,
  },
  TitleDiv: {
    left: 45,
    marginTop:wp('10%')
  },
  title: {
    color: '#FCD705',
    fontSize: hp('8%'),
    fontWeight: 'bold',
    },
  titleSub: {
    color: '#FCD705',
    fontSize: hp('3%'),
    marginBottom: 10,
    marginTop: 5,
    },
  TextInputDiv: {
    alignItems: 'center',
  },
  // input1: {
  //   width: wp('88%'),  
  //   fontSize: hp('2.5%'),
  //   fontWeight: 'bold',
  //   color: 'white',
  //   marginBottom: 10,
  //   },
    ForgotPassDiv: {
      left: 210,
      marginTop:wp('3%')
    },
    ForgotPass: {
      color: 'white',
      fontSize: hp('2.5%'),
    },
    but: {
      left: 130,
      width: wp('35%'), 
      marginTop:wp('3%'),
      alignItems:'center'
    },
    butText: {
      color: '#22222C',
      fontSize: hp('3%'),
      marginTop: 10,
      borderColor: '#A9A9A9',
      backgroundColor: '#FCD705',
      paddingVertical: 8,
      paddingHorizontal: 20,
      fontWeight: 'bold',
    },
    socialAccount: {
      paddingTop: 5,
      paddingBottom: 5,
      textAlign: 'center',
      color: 'white',
      marginTop:wp('3%')
    },
    socialIconDiv: {
      flexDirection: 'row', 
      justifyContent:'center',
      marginTop:wp('3%'),
      zIndex: 10,
    },
    fontFacebook: {
      fontSize: 30,
      color: '#FAFBFF', 
    },
    fontInsta: {
      fontSize: 30,
      color: '#FAFBFF',     
    },
    fontGoogle: {
      fontSize: 30,
      color: '#FAFBFF',     
    },
    CreateDiv: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop:wp('3%')
    },
    pass: {
      color: 'white',
      fontSize: hp('2.5%'),
    },
    pass2: {
      color: '#FCD705',
      fontSize: hp('2.5%'), 
      paddingLeft: 5,
    },
});