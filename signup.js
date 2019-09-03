import React from 'react';
import {Text,
        View,
        AppRegistry,
        StyleSheet,
        Image,
        TextInput,
        ScrollView,
        Button,
        TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CheckBox from 'react-native-modest-checkbox';
import {widthPercentageToDP as wp, 
        heightPercentageToDP as hp,
        listenOrientationChange as loc,
        removeOrientationListener as rol} 
from 'react-native-responsive-screen';

const Jaguar = '#22222C';
export default class signup extends React.Component{
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
			<View style={styles.TextInputDiv}>
				<TextInput style={styles.inputfield}
				selectionColor={Jaguar} 
				placeholder="First Name" />
				<TextInput style={styles.inputfield}
				selectionColor={Jaguar}
				placeholder="Last Name"/>
				<TextInput style={styles.inputfield}
				selectionColor={Jaguar}
				placeholder="Email Address"/>
				<TextInput style={styles.inputfield}
				selectionColor={Jaguar}
				placeholder="Phone Number"/>
				<TextInput style={styles.inputfield}
				selectionColor={Jaguar}
				placeholder="Password"/>
			</View>
			<View style={styles.checkboxDiv}>
				<CheckBox
				checkedImage={require('./images/Checked.png')}
				uncheckedImage={require('./images/unChecked.png')}
  				label='I accept all terms and conditions'
  				labelStyle={{ color:'white' }}
				/>
			</View>	
			<View style={styles.but}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('profile')} >          
                    <Text style={styles.butText}>SIGN UP</Text>
                </TouchableOpacity>
                <Text style={{ color: 'white', marginTop: 10 }}>Or create using social media</Text>
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
               <View style={styles.footerImgDiv}>
                  <Image style={styles.footerImg}
                  source={require('./images/down.png')}/>
                </View>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		backgroundColor: '#22222C',
		flex: 1,
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
    top: 20,
    marginBottom: 20,
  },
  profileIcon: {
    width: wp('90%'), 
    height: hp('15%'),
  },
  TextInputDiv: {
    alignItems: 'center',
  },
	inputfield: {
		width: wp('88%'),
        paddingRight: 25,
        paddingLeft: 25,  
        borderWidth: 1,
        borderRadius: 50,
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
    },
    butText: {
        color: '#22222C',
        fontSize: hp('3.5%'),
        marginTop: 10,
        borderColor: '#A9A9A9',
        backgroundColor: '#FCD705',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 50,
        fontWeight: 'bold',
    },
    socialIconDiv: {
      flexDirection: 'row', 
      justifyContent:'center',
      padding: 5,
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
    footerImgDiv: {
      alignItems: 'center',
    },
    footerImg: {
      width: wp('100%'), 
      height: hp('13%'),                          
    },
});