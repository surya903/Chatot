import React from 'react';
import { StyleSheet,
         Text,
         Image,
         View,
         Button,
         TextInput,
         TouchableOpacity,
         ScrollView, } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Entypo';
import UserAvatar from 'react-native-user-avatar';
import {widthPercentageToDP as wp, 
        heightPercentageToDP as hp,
        listenOrientationChange as loc,
        removeOrientationListener as rol} 
from 'react-native-responsive-screen';

import {createBottomTabNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import gallery from './cameraBottomTab/gallery.js';
import photo from './cameraBottomTab/photo.js';
import video from './cameraBottomTab/video.js';

const CameraBottomNavigator = createMaterialBottomTabNavigator({
  	Home: { screen: gallery},
  	photo:{ screen: photo},
  	video: { screen: video}
  
})

export default CameraBottomNavigator;