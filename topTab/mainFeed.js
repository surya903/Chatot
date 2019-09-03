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

const Jaguar = '#22222C';
 
export default class mainFeed extends React.Component {
  componentDidMount() {
    loc(this);
  }
  
  componentWillUnMount() {
    rol();
  }
  render() {
    return (
      <View style={{ flex: 1,}}>
        <View
          style={{
          borderBottomColor: '#22222C',
          borderBottomWidth: 1.5,
          }}/>
	       <Text>main feed page</Text>
      </View>  
    );
  }
}

mainFeed.navigationOptions = {
	tabBarIcon: ({tintColor, focused}) => (
		<FontAwesome5 name={'globe'} 
		style={styles.globe}
		color={tintColor}/>
		)
}

const styles = StyleSheet. create ({
	globe: {
		fontSize: hp('3%'),
	},
});