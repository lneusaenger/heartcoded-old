import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; // ensure keyboard doesn't cover input fields
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = () => {
        console.log("Name: " + name);
        if (name === '' || email === '' || password === '') {
            alert('Please fill in all fields')
        } 

        // await axios.post('https://localhost:8001/api/signup', {
        //     name: name,
        //     email: email,
        //     password: password
        // })
        console.log("Success");
        alert('Success');
    }
    
    return (
        <KeyboardAwareScrollView>
            <View style = {styles.container}>
                <Text style = {styles.signupText}>Sign Up For Love</Text>
                <View style = {{ marginHorizontal: 24}}>
                    <Text style = {{fontSize: 16, color: '#8e93a1'}}>NAME</Text>
                    <TextInput style = {styles.signupInput} value = {name} onChangeText = {setName} autoCapitalize="words" />
                </View>
                <View style = {{ marginHorizontal: 24}}>
                    <Text style = {{fontSize: 16, color: '#8e93a1'}}>EMAIL</Text>
                    <TextInput style = {styles.signupInput} value = {email} onChangeText = {setEmail} autoComplete="email" keyboardType="email-address" />
                </View>
                <View style = {{ marginHorizontal: 24}}>
                    <Text style = {{fontSize: 16, color: '#8e93a1'}}>PASSWORD</Text>
                    <TextInput style = {styles.signupInput} value = {password} onChangeText = {setPassword} secureTextEntry={true} autoComplete='password' />
                </View>
                <TouchableOpacity onPress={handleSubmit} style = {styles.buttonStyle}>
                    <Text style = {styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
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

});

export default SignUp;