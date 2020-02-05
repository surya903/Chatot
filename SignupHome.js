import React from 'react';
import {Text,
        View,
        StyleSheet,
        TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextField } from 'react-native-material-textfield';
import {widthPercentageToDP as wp, 
        heightPercentageToDP as hp,
        listenOrientationChange as loc,
        removeOrientationListener as rol} 
from 'react-native-responsive-screen';
import firebase from 'react-native-firebase';


export default class SignupHome extends React.Component{
    fieldRef = React.createRef();

    onSubmit = () => {
      let { current: field } = this.fieldRef;
  
      console.log(field.value());
    };
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    componentDidMount() {
      loc(this);
    }
    
    componentWillUnMount() {
      rol();
    }
    
    render() {
        const { values, handleChange } = this.props;

        return (
        <React.Fragment>
            <View style={styles.container}>
                    <View style={styles.TitleDiv}>
                        <Text style={styles.title}>Create Account</Text>
                    </View>
                    <View style={styles.TextInputDiv}>
                    <TextField 
                    label='Full Name'
                    onSubmitEditing={this.onSubmit}
                    ref={this.fieldRef}
                    containerStyle={{ width: wp('70%'),height:hp('11%')}}
                    textColor='#FCD705'
                    baseColor="white"
                    tintColor="#FCD705"
                    // onChange={handleChange('fullName')}
                    onChangeText={text => handleChange('fullName', text)}
                    defaultValue={values.fullName}
                    />
                    <TextField 
                    label='Email'
                    ref="email"
                    containerStyle={{ width:wp('70%'),height:hp('11%')}}
                    textColor='#FCD705'
                    baseColor="white"
                    tintColor="#FCD705"
                    keyboardType={'email-address'}
                    // onChange={handleChange('email')}
                    onChangeText={text => handleChange('email', text)}
                    defaultValue={values.email}
                    />
                    <TextField 
                    label='Mobile Number'
                    ref="phoneNumber"
                    containerStyle={{ width: wp('70%'),height:hp('11%')}}
                    textColor='#FCD705'
                    baseColor="white"
                    tintColor="#FCD705"
                    // onChange={handleChange('phoneNumber')}
                    onChangeText={text => handleChange('phoneNumber', text)}
                    keyboardType={'number-pad'}
                    defaultValue={values.phoneNumber}
                    />
                    <TextField 
                    label='Password'
                    ref="password"
                    containerStyle={{ width: wp('70%'),height:hp('11%')}}
                    textColor='#FCD705'
                    baseColor="white"
                    tintColor="#FCD705"
                    // onChange={handleChange('password')}
                    onChangeText={text => handleChange('password', text)}
                    defaultValue={values.password}
                    />
                </View>

                <View style={styles.checkboxDiv}>
                    {/* <CheckBox
                    checkedImage={require('../images/Checked.png')}
                    uncheckedImage={require('../images/unChecked.png')}
                    label='I accept all terms and conditions'
                    labelStyle={{ color:'white' }}
                    /> */}
                </View>	
                <View style={styles.but}>
                    <TouchableOpacity >          
                        <Text style={styles.butText} onPress={this.continue}>Continue</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', marginTop:wp('3%') }}>Or create using social media</Text>
                </View>
                <View style={styles.socialIconDiv}>
                    <TouchableOpacity>
                        <Text style={{ paddingRight: 40 }}>  
                        <FontAwesome5 style={styles.fontFacebook} name={'facebook-square'} />
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>  
                        <FontAwesome5 style={styles.fontInsta} name={'instagram'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ paddingLeft: 40 }}>  
                            <FontAwesome5 style={styles.fontGoogle} name={'google-plus'} />
                        </Text>
                    </TouchableOpacity>  
                </View>
            </View>
        </React.Fragment>
        );
    }
}

const styles = StyleSheet.create ({
	container: {
		backgroundColor: '#121212',
		flex: 1,
  },
  TitleDiv: {
    alignItems:'center',
    marginTop:wp('15%')
  },
  title: {
    color: '#FCD705',
    fontSize: hp('4%'),
    fontWeight: 'bold',
    },
  TextInputDiv: {
    alignItems: 'center',
    marginTop: wp('5%') 
  },
	inputfield: {
		width: wp('88%'),
    paddingRight: 25,
    paddingLeft: 25,  
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: '#22222C',
    marginBottom: 10,
    borderColor: '#FCD705',
    backgroundColor: '#A19FA3',
	},
	checkboxDiv:{
		marginLeft: 35,
	},
	but: {
        alignItems: 'center',
        borderRadius: 15,
        marginTop:wp('3%')
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
    socialIconDiv: {
      flexDirection: 'row', 
      justifyContent:'center',
      padding: 5,
      marginTop:wp('3%')
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
});