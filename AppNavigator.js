import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import profile from './profile';
import signup from './signup';
import homeFixed from './homeFixed';
import CameraScreen from './camera';
import TabNavigator from './bottomTab';


const AppNavigator = createStackNavigator({
    Home: { screen: Home, 
    	navigationOptions: {header: null},
	},
	signup:{ screen: signup, 
		navigationOptions: {header: null},
	},
	profile: { screen: profile,
		navigationOptions: {header: null},
	},
	homeFixed:{ screen: homeFixed,
		navigationOptions: {header: null},
	},
	camera:{
		screen: CameraScreen,
		navigationOptions: {header: null},
	},
	bottomTab:{
		screen: TabNavigator, 
	},
},
);

export default createAppContainer(AppNavigator);