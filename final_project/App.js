import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {screenName} from './src/components/global/constant';
import Login from './src/components/authentication/login/login';
import Register from './src/components/authentication/register/register';
import PasswordRecovery from './src/components/authentication/passwordRecovery/password-recovery';
import Home from './src/components/main/home/home';
export default function App() {
  const screenStack = createStackNavigator();
  return (
      <NavigationContainer>
        <screenStack.Navigator initialRouteName={screenName.LoginScreen} screenOptions={{headerShown: false}}>
          <screenStack.Screen name={screenName.LoginScreen} component={Login}/>
          <screenStack.Screen name={screenName.RegisterScreen} component={Register}/>
          <screenStack.Screen name={screenName.PasswordRecoveryScreen} component={PasswordRecovery}/>
          <screenStack.Screen name={screenName.HomeScreen} component={Home}/>
        </screenStack.Navigator>
      </NavigationContainer>
  );
}
