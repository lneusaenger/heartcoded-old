import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react';

const SignUp = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.signupText}>Sign Up For Love</Text>
            <View style = {{ marginHorizontal: 24}}>
                <Text style = {{fontSize: 16, color: '#8e93a1'}}>NAME</Text>
                <TextInput style = {styles.signupInput} />
            </View>
        </View>    
        )
}