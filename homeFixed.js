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
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
}
  from 'react-native-responsive-screen';
import { createAppContainer } from 'react-navigation';
import TopNavigator from '../navigation/topNavigatorHomeFeed.js';
console.disableYellowBox = true;



YellowBox.ignoreWarnings(['ViewPagerAndroid']);

const AppIndex = createAppContainer(TopNavigator);

const yellow = '#FCD705';

export default class homeFixed extends React.Component {

  componentDidMount() {
    loc(this);
  }

  componentWillUnMount() {
    rol();
  }

  render() {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('bottomTab')}>
              <FontAwesome5 style={styles.camera} name={'camera'} />
            </TouchableOpacity>
            <TextInput style={styles.inputSearch}
              selectionColor={yellow}
              placeholder="Search" 
              placeholderTextColor='#FCD705'
              />
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('profile')}>
            <FontAwesome5 style={styles.profile} name={'user-alt'} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("chat")}
          style={styles.fabDiv}>
            <View style={styles.fab}>
              <FontAwesome5 style={styles.fabIcon} name='telegram-plane' size={35} />
            </View>
          </TouchableOpacity>        
            <AppIndex />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1.0,
    backgroundColor: 'white'
},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#121212',
    padding: 10,
  },
  camera: {
    color: '#FCD705',
    fontSize: hp('3.5%'),
    paddingLeft: 8,
    marginTop: 5,
  },
  profile: {
    color: '#FCD705',
    fontSize: hp('3.5%'),
    marginTop: 5,
  },
  inputSearch: {
    width: wp('70%'),
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderBottomColor: 'yellow',
    fontSize: 20,
    backgroundColor: 'transparent',
    color:'#FCD705'
  },
  fabDiv:{
    position:'absolute',
    zIndex:1,
    bottom:0,
    right:0,
    margin:15,
  },
  fab:{
    backgroundColor:'#121212',
    alignItems:'center',
    width: wp('15%'),
    borderRadius:wp('10%'),
    justifyContent:'center'
  },
  fabIcon:{
    color:'#FCD705',
    padding: wp('3%'),
    marginRight:wp('1%')
  },
});

