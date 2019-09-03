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
  YellowBox
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Entypo';
import UserAvatar from 'react-native-user-avatar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
}
  from 'react-native-responsive-screen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Drawer from 'react-native-drawer-menu';
import TopNavigator from './cameraFeedRouter.js';
import CameraBottomNavigator from './cameraFeedRouter.js';



const cameraFooter = createAppContainer(CameraBottomNavigator);

const Jaguar = '#22222C';

export default class cameraFeedMain extends React.Component {

render() {
    return (
        <cameraFooter/>
    );
    }
}



const styles = StyleSheet.create({

});
