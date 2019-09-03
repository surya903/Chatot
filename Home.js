import React from 'react';
import { Text,
          View,
          AppRegistry,
          StyleSheet,
          Image,
          TextInput,
          ScrollView,
          Button,
          TouchableOpacity, } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';          
import {widthPercentageToDP as wp, 
        heightPercentageToDP as hp,
        listenOrientationChange as loc,
        removeOrientationListener as rol} 
from 'react-native-responsive-screen';


const BLACK = '#2F4F4F';
export default class Home extends React.Component {
  
  componentDidMount() {
    loc(this);
  }
  
  componentWillUnMount() {
    rol();
  }
  render() {
    return (
    <View style={styles.container}> 
      <View style={styles.CircleDiv}>
        <Image style={styles.CircleImg} 
        source={require('./images/Circle.png')}/>
      </View>
      <View style={styles.profileIconDiv}>
        <Image style={styles.profileIcon} source={require('./images/profileIcon.png')}/>
      </View>
      <View style={styles.TitleDiv}>
        <Text style={styles.title}>ChatOt</Text>
        <Text style={styles.titleSub}>Sign in to your account</Text>
      </View>
      <View style={styles.TextInputDiv}>                 
        <TextInput style={styles.input1} 
        selectionColor={BLACK} 
        placeholder="Email" />
        <TextInput style={styles.input1}
        selectionColor={BLACK} 
        placeholder="Password" />
      </View>
      <View style={styles.ForgotPassDiv}>  
        <Text style={styles.ForgotPass}
        >Forgot your Password?</Text>
      </View>
      <View style={styles.but}>
        <TouchableOpacity onPress={() =>
          this.props.navigation.navigate('homeFixed')}>          
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
      <View style={styles.footerImgDiv}>
        <Image style={styles.footerImg}
        source={require('./images/down.png')}/>
      </View>                            
    </View>      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22222C',
    flex:1,
  },
  CircleDiv: {
    position: 'absolute',
    alignItems: 'center',
  },
  CircleImg: {
    width: wp('100%'),
    height: hp('35%'),
  },
  profileIconDiv: {
    alignItems: 'center',
    top: 50,
    marginBottom: 40,
  },
  profileIcon: {
    width: wp('90%'), 
    height: hp('15%'),
  },
  TitleDiv: {
    left: 42,
  },
  title: {
    color: '#FCD705',
    fontSize: hp('12%'),
    fontWeight: 'bold',
    },
  titleSub: {
    color: '#FCD705',
    fontSize: hp('3%'),
    marginBottom: 10,
    marginTop: -15,
    },
  TextInputDiv: {
    alignItems: 'center',
  },
  input1: {
    width: wp('88%'),
    paddingRight: 25,
    paddingLeft: 25,  
    borderWidth: 1,
    borderRadius: 50,
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#22222C',
    marginBottom: 10,
    borderColor: '#FCD705',
    backgroundColor: '#A19FA3',
    },
    ForgotPassDiv: {
      left: 160,
    },
    ForgotPass: {
      color: 'white',
      fontSize: hp('2.5%'),
    },
    but: {
      left: 130,
      width: wp('35%'), 
      borderRadius: 15,
    },
    butText: {
      color: '#22222C',
      fontSize: hp('3%'),
      marginTop: 10,
      borderColor: '#A9A9A9',
      backgroundColor: '#FCD705',
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 50,
      fontWeight: 'bold',
    },
    socialAccount: {
      paddingTop: 5,
      paddingBottom: 5,
      textAlign: 'center',
      color: 'white',
    },
    socialIconDiv: {
      flexDirection: 'row', 
      justifyContent:'center',
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
      justifyContent: 'center'
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
    footerImgDiv: {
      alignItems: 'center',
    },
    footerImg: {
      width: wp('100%'), 
      height: hp('13%'),                          
    },
});