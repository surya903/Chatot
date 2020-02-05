import React from 'react';
import {Text,
        View,
        StyleSheet,
        Image,
        Button,
        TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextField } from 'react-native-material-textfield';
import RadioButton from './RadioButton';
import {widthPercentageToDP as wp, 
        heightPercentageToDP as hp,
        listenOrientationChange as loc,
        removeOrientationListener as rol}from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';
import UserAvatar from 'react-native-user-avatar';
import firebase from 'react-native-firebase';

const Jaguar = '#22222C';

export default class SignupSecond extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      uri :'',
      imagePath:'',
      imageSelected: false,
      radioState:''
    }
  }
  
continue = e => {
  e.preventDefault();
  this.props.nextStep();
}
back = e =>  {
  e.preventDefault();
  this.props.prevStep();
}

 // pick image from imagepicker
 selectImage = () => {
  const options = {
      title: 'Choose profile picture',
      storageOptions: {
          skipBackup: true,
          path: 'images',
          allowsEditing: true,
      },
  };

ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
      console.log('User cancelled image picker');
  }
  else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
      console.log('User tapped custom button: ',response.customButton);

  }
  else {
      // var path = '';
      // if (Platform.OS == 'ios')
      //     path = response.uri.toString();
      // else {
      //     path = response.path.toString();
      // }

      // let image = {
      //     path: response.path.toString()
      // };
      this.setState({
          imagePath: response.path.toString(),
          uri: response.uri,
          imageSelected:true,
      });
      
      alert(this.state.imagePath);
      // this.uploadImage(image);
  }
});
}

  signUp = () => {
    console.log('gender',this.state.radioState);
    //console.log('values', values);
  }


componentWillUnMount() {
  rol();
}
render() {
  const { values, handleChange }= this.props;
  const radioState = this.state.radioState;
  const options = [
    {
      key: 'male',
      text: 'Male',
    },
    {
      key: 'female',
      text: 'Female',
    },
  ];
  // console.log(values);
    return (
    <View style={styles.container}>
      <View style={styles.TitleDiv}>
        <Text style={styles.title}>Create Account</Text>
      </View>
      <View style={{marginTop: wp('5%'),
      marginBottom:wp('3%'),
      left:60}}>
        <Text style={{color:'white',fontSize:wp('4.5%'),marginBottom:wp('1%')}}>Profile picture:</Text>
      </View>
      <View style={{ flexDirection:'row',
        justifyContent:'space-around',
        alignItems:"center", 
        }}>
          
        <View style={{left:25}}>
          { this.state.imageSelected == true ? (
            <Image 
            source={{uri:this.state.uri}}
            style={{width:wp('25%'),
            height:hp('15%'),
            borderRadius:wp('30%'),
            resizeMode:'cover'}} />
          ):(
            <Image 
            source={{uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}}
            style={{width:wp('25%'),
            height:hp('15%'),
            borderRadius:wp('30%'),
            resizeMode:'cover'}} />
          )}
        </View>
        <View style={{right:25}}>
          <TouchableOpacity onPress={this.selectImage}>
            <Text style={styles.selectImage}>Upload Image</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.TextInputDiv}>
        <TextField 
        label='Description'
        ref="Description"
        containerStyle={{ width: wp('70%'),height:hp('11%') }}
        textColor='#FCD705'
        baseColor="white"
        tintColor="#FCD705"
        onChangeText={text => handleChange('description', text)}
        defaultValue={values.description}
        />
      </View>
      <View>
          <Text style={{color:'white',left:60,marginBottom:8,fontSize:wp('4.5%'),marginTop:wp('1%')}}>Gender :</Text>
          <View>
          {options.map(item => {
            return (
              <View key={item.key} style={styles.buttonContainer}>
                              <View>
                                  <TouchableOpacity
                                          style={styles.circle}
                                          onPress={() => {
                                              this.setState({
                                                  radioState: item.key,
                                              });
                                          }}
                                      >
                                          {radioState === item.key && <View style={styles.checkedCircle} />}
                                      </TouchableOpacity>
                              </View>
                              <View>
                                  <Text style={{color:'white',marginLeft:10}}>{item.text}</Text>
                              </View>
                          </View>
            );
          })}
        </View>
      </View>
      <View style={styles.but}>
        <View style={{ flexDirection: 'row', justifyContent:'space-around'}}>
            <TouchableOpacity onPress={this.back}>          
              <Text style={styles.butText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.signUp}>          
              <Text style={styles.butText}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
        <View style={{ alignItems:'center' }}>
          <Text style={{ color: 'white', marginTop:wp('3%') }}>Or create using social media</Text>
        </View>
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
selectImage: {
  color: '#22222C',
  fontSize: hp('2%'),
  marginTop: 10,
  borderColor: '#A9A9A9',
  backgroundColor: '#FCD705',
  paddingVertical: 8,
  paddingHorizontal: 20,
  borderRadius:wp('30%'),
  fontWeight: 'bold',
  },
TextInputDiv: {
alignItems: 'center'
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
buttonContainer: {
  flexDirection: 'row',
  marginBottom:6,
  left:110
},

circle: {
height: 20,
width: 20,
borderRadius: 10,
borderWidth: 1,
borderColor: '#ACACAC',
alignItems: 'center',
justifyContent: 'center',
},

checkedCircle: {
width: 14,
height: 14,
borderRadius: 7,
backgroundColor: '#FCD705',
},
checkboxDiv:{
marginLeft: 35,
},
but: {
borderRadius: 15,
marginTop:wp('1%')
},
butText: {
color: '#22222C',
fontSize: hp('2%'),
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