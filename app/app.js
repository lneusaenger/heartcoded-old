import { StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';
import SignUp from './auth-screens/SignUp';
import SignIn from './auth-screens/SignIn';
import React, { Component } from 'react';
import { AuthProvider } from '../context/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render(){
    return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "SignIn">
          <Stack.Screen name = "SignUp" component = {SignUp} />
          <Stack.Screen name = "SignIn" component = {SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}
}
export default registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});