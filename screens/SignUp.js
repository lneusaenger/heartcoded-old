import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; // ensure keyboard doesn't cover input fields
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthContext } from '../context/auth';

const SignUp = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useContext(AuthContext);

    const handleSubmit = async () => {
        console.log("Name: " + name);
        if (name === '' || email === '' || password === '') {
          alert('Please fill in all fields');
        } else {
          try {
            const resp = await axios.post('http://localhost:8000/api/signup', {
              name: name,
              email: email,
              password: password,
            });
            if(resp.data.error)
                alert(resp.data.error)
            else{
                setState(resp.data);
                await AsyncStorage.setItem("auth-rn", JSON.stringify(resp.data));
                alert('Sign up successful');
                navigation.navigate("PersonalProfile");
            }
          } catch (error) {
            console.error("Error during signup:", error);
            if (error.response) {
              // The request was made and the server responded with a status code outside the range of 2xx
              console.error("Server response:", error.response.data, error.response.status, error.response.headers);
              alert('Error during signup: ' + error.response.data.message);
            } else if (error.request) {
              // The request was made but no response was received
              console.error("Request error:", error.request);
              alert('Network error during signup. Please check your connection and try again.');
            } else {
              // Something happened in setting up the request that triggered an Error
              console.error("Axios config error:", error.message);
              alert('Error during signup: ' + error.message);
            }
          }
        }
      };
      
    
    return (
        <KeyboardAwareScrollView contentContainerStyle = {styles.container}>
            <View style = {{marginVertical: 100}}>
                <Text style = {styles.signupText}>Sign Up For Love</Text>
                <View style = {{ marginHorizontal: 24}}>
                    <Text style = {{fontSize: 16, color: '#8e93a1'}}>NAME</Text>
                    <TextInput style = {styles.signupInput} value = {name} onChangeText = {text => setName(text)} autoCapitalize="words" />
                </View>
                <View style = {{ marginHorizontal: 24}}>
                    <Text style = {{fontSize: 16, color: '#8e93a1'}}>EMAIL</Text>
                    <TextInput style = {styles.signupInput} value = {email} onChangeText = {text => setEmail(text)} autoComplete="email" keyboardType="email-address" />
                </View>
                <View style = {{ marginHorizontal: 24}}>
                    <Text style = {{fontSize: 16, color: '#8e93a1'}}>PASSWORD</Text>
                    <TextInput style = {styles.signupInput} value = {password} onChangeText = {text => setPassword(text)} secureTextEntry={true} autoComplete='password' />
                </View>
                <TouchableOpacity onPress={handleSubmit} style = {styles.buttonStyle}>
                    <Text style = {styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style = {{fontSize:12, textAlign: 'center'}}>
                    Already joined?{" "}
                    <Text
                        style = {{color:'darkred', fontWeight: 'bold'}}
                        onPress = {() => navigation.navigate("SignIn")}>
                            Sign In
                        </Text>

                </Text>
            </View>  
        </KeyboardAwareScrollView>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        width: '100%'
    },
    signupText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#514e5a',
        marginBottom: 16,
        textAlign: 'center'
    },
    signupInput: {
        height: 40,
        borderBottomColor: '#8e93a1',
        borderBottomWidth: 0.5,
        fontSize: 15,
        color: '#514e5a',
        marginBottom: 16
    },
    buttonStyle: {
        backgroundColor: '#e9446a',
        borderRadius: 10,
        height: 52,
        marginBottom: 16,
        marginHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }

})

export default SignUp