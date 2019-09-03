import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  YellowBox,
  FlatList,
  SafeAreaView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import UserAvatar from 'react-native-user-avatar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
}
  from 'react-native-responsive-screen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TopNavigator from './topRouter.js';
import Drawer from 'react-native-drawer';
console.disableYellowBox = true;



YellowBox.ignoreWarnings(['ViewPagerAndroid']);

const AppIndex = createAppContainer(TopNavigator);

const Jaguar = '#22222C';

export default class homeFixed extends React.Component {
  componentDidMount() {
    loc(this);
  }

  componentWillUnMount() {
    rol();
  }

  constructor(props) {
    super(props)

}

renderDrawer() {
    //sideDrawerMenu
    return (
        <View style={{ flex:1 }}>
          <View style={styles.drawerHeader}>
            <TouchableOpacity style={{ paddingHorizontal: 10, }} 
            onPress={() => this.props.navigation.navigate('profile')}>
                <UserAvatar size="70" name="Avishay Bar" 
                src="https://farm66.staticflickr.com/65535/48130913786_2810c0e145_b.jpg" />
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('profile')} >
                <Text style={styles.drawerProfileName}>Vijay</Text>
                <Text style={styles.drawerProfileSubName}>Actor</Text>
              </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ flexDirection: 'row'}}>
            <View style={styles.settingsIcon}>
              <Icon1 style={{fontWeight: 'bold'}} name="settings" size={30} color="#343D47" />
            </View>
            <View style={styles.settingsText}>
              <Text style={{ fontSize: hp('3%')}}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row'}}>
            <View style={styles.editProfileIcon}>
              <EvilIcons name="pencil" size={50} color="#343D47" />
            </View>
            <View style={styles.editProfileText}>
              <Text style={{ fontSize: hp('3%')}}>Edit Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row'}}>
            <View style={styles.savedIcon}>
              <Fontisto name="bookmark-alt" size={35} color="#343D47" />
            </View>
            <View style={styles.savedText}>
              <Text style={{ fontSize: hp('3%')}}>Saved</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerfooter}>
            <TouchableOpacity style={{ flexDirection: 'row'}}>
              <View style={styles.logoutIcon}>
                <Fontisto name="power" size={25} color="#FCD705" />
              </View>
              <View>
                <Text style={{ 
                  fontSize: hp('3%'), 
                  color: 'white',
                  paddingHorizontal: 5
                  }}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    )
}

openDrawer() {
    this.drawer.open()
}

closeDrawer() {
    this.drawer.close()
}


  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.safeAreaStyle}>
                <View style={styles.mainContainer}>
                    <Drawer
                        ref={(ref) => this.drawer = ref}
                        content={this.renderDrawer()}
                        side={"right"}
                        type='static'
                        tapToClose={true}
                        openDrawerOffset={0.14}
                        styles={drawerStyles}>
                        <View style={styles.header}>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('bottomTab')}>
                            <FontAwesome5 style={styles.camera} name={'camera'} />
                          </TouchableOpacity>
                          <TextInput style={styles.inputSearch}
                            selectionColor={Jaguar}
                            placeholder="Search" />
                          <TouchableOpacity onPress={this.openDrawer.bind(this)}>
                            <Icon name="grid" size={35} color="#FCD705" />
                          </TouchableOpacity>
                        </View>
                        <AppIndex />
                        <View style={styles.footer}>
                          <TouchableOpacity>
                            <FontAwesome5 style={styles.telegram} name={'telegram-plane'} />
                          </TouchableOpacity>
                        </View>
                    </Drawer>
                </View>
            </SafeAreaView>
        
      </View>
    );
  }
}

const drawerStyles = {
  drawer: {
      flex: 1.0,
      backgroundColor:'#F5F5F5',
  },
  main: {
      flex: 1.0,
      backgroundColor: 'white'
  }
}


const styles = StyleSheet.create({
drawerHeader:{
  flexDirection: 'row',
  padding: 7,
  backgroundColor: '#22222C',
},
drawerProfileName: {
  fontSize: hp('4%'),
  color: 'white',
},
drawerProfileSubName:{
  color: 'white'
},
settingsIcon: {
  paddingVertical:15,
  paddingHorizontal:25,
},
settingsText: {
  paddingVertical:15,
},
editProfileIcon: {
  paddingRight: 12,
  paddingLeft: 20,
},
savedIcon: {
  paddingVertical:15,
  paddingHorizontal:30,
},
savedText: {
  paddingVertical:15,
},
drawerfooter: {
  backgroundColor: '#22222C',
  padding: 9.5,
  alignItems: 'center',
  position: 'absolute',
  left:0,
  right:0,
  bottom:0
},
  mainContainer: {
    flex: 1.0,
    backgroundColor: 'white'
},
safeAreaStyle: {
    flex: 1.0,
    backgroundColor: '#3B5998',
},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#22222C',
    padding: 10,
  },
  camera: {
    color: '#FCD705',
    fontSize: hp('3.5%'),
    paddingLeft: 8,
    marginTop: 5,
  },
  inputSearch: {
    width: wp('60%'),
    paddingRight: 25,
    paddingLeft: 25,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 50,
    fontSize: 20,
    color: '#22222C',
    borderColor: '#FCD705',
    backgroundColor: 'white',
  },
  footer: {
    backgroundColor: '#22222C',
    padding: 2,
    alignItems: 'center',
    position: 'absolute',
    left:0,
    right:0,
    bottom:0
  },
  telegram: {
    fontSize: hp('5%'),
    color: '#FCD705',
    marginTop: 5,
  }

});
