import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {transitionConfig} from './ScreenAnim';

import Splash from '../views/screens/auth/Splash';
import Dashboard from '../views/screens/home/dashboard/Dashboard';
import ManageCities from '../views/screens/home/manageCities/ManageCities';
import FutureForecast from '../views/screens/home/futureForecast/FutureForecast';

const Stack = createStackNavigator();

export default class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            transitionSpec: transitionConfig,
            headerShown: false,
            headerMode: 'float',
          }}>
          <Stack.Screen name={'MainRoutes'} component={MainRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const MainRoutes = () => {
  return (
    <Stack.Navigator
      // headerMode='none'
      initialRouteName="Splash"
      screenOptions={{
        transitionSpec: transitionConfig,
        headerShown: false,
      }}>
      <Stack.Screen name={'Splash'} component={Splash} />
      <Stack.Screen name={'Dashboard'} component={Dashboard} />
      <Stack.Screen name={'ManageCities'} component={ManageCities} />
      <Stack.Screen name={'FutureForecast'} component={FutureForecast} />
    </Stack.Navigator>
  );
};
