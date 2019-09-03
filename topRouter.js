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

import {createMaterialTopTabNavigator} from 'react-navigation';
import mainFeed from './topTab/mainFeed.js';
import connect from './topTab/connect.js';
import diary from './topTab/diary.js';
import tabprofile from './topTab/tabprofile.js';
import notification from './topTab/notification.js';

const TopNavigator = createMaterialTopTabNavigator(
  {
  	Home: mainFeed,
  	Second: connect,
  	Third: diary,
  	Fourth: tabprofile,
    fifth: notification,
  },
  {

    tabBarOptions: {
      activeTintColor: '#FCD705',
      inactiveTintColor: '#22222C',
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        opacity: 0,
      },
      style: {
        backgroundColor: 'transparent',
        borderBottomColor: wp('0.5%'),
      }
    },
  },
)

export default TopNavigator;