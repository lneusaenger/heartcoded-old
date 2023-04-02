import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../../screens/SignUp';
import SignIn from '../../screens/SignIn';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function SignUpScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "SignIn">
        <Stack.Screen name = "SignUp" component = {SignUp} />
        <Stack.Screen name = "SignIn" component = {SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

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
