import React from 'react';
import AppNavigator from './AppNavigator';
import { createAppContainer } from 'react-navigation';
import Amplify from 'aws-amplify';
import aws_config from "./aws-exports";
Amplify.configure(aws_config);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}