import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  }
    from 'react-native-responsive-screen';
import CameraRollPicker from 'react-native-camera-roll-picker';
import CameraScreen from './camera';

class gallery extends React.Component {
    myImages(){
      alert();
    }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CameraRollPicker
        callback={this.myImages.bind(this)} />
      </View>
    );
  }
}

class photos extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CameraScreen/>
      </View>
    );
  }
}
class videos extends React.Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <CameraScreen/>
        </View>
      );
    }
  }
  

const TabNavigator = createBottomTabNavigator(
    {
  Gallery: gallery,
  Photos: photos,
  Videos: videos,
},
{
    tabBarOptions: {
      activeTintColor: '#FCD705',
      inactiveTintColor: 'white',
      showIcon: true,
      showLabel: true,
      indicatorStyle: {
        opacity: 0,
      },
      style: {
        backgroundColor: '#22222C',
        paddingBottom: 15,
        fontSize: hp('10%'),
      }
    },
  },
);

export default createAppContainer(TabNavigator);