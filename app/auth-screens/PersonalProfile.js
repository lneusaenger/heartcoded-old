import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native';

const PersonalProfile = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [interest1, setInterest1] = useState('');
  const [interest2, setInterest2] = useState('');
  const [interest3, setInterest3] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('');
  const [preferences, setPreferences] = useState('');
  const [image, setImage] = useState(null);
  const [privateBio, setPrivateBio] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  
  const genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
    { label: 'Prefer not to say', value: 'Prefer not to say' },
  ];

  const preferenceOptions = [
    { label: 'Men only', value: 'Men only' },
    { label: 'Females only', value: 'Females only' },
    { label: 'Everyone', value: 'Everyone' },
  ];

  return (
    <KeyboardAwareScrollView>
      <View>
        <Text style={styles.signupText}>Time to set up your profile!</Text>
        <Button title="Upload Image" onPress={pickImage} />
        <View style={{ marginHorizontal: 24, marginBottom: 48 }}>
          <Text style={{ fontSize: 16, color: '#8e93a1' }}>NAME</Text>
          <TextInput
            style={styles.signupInput}
            value={name}
            onChangeText={(text) => setName(text)}
            autoCapitalize="words"
          />
        </View>
        <View style={{ marginHorizontal: 24, marginBottom: 48 }}>
          <Text style={{ fontSize: 16, color: '#8e93a1' }}>BIRTHDAY</Text>
          <TextInput
            style={styles.signupInput}
            value={birthday}
            onChangeText={(text) => setBirthday(text)}
          />
        </View>
        <View style={{ marginHorizontal: 24, marginBottom: 48 }}>
          <Text style={{ fontSize: 16, color: '#8e93a1' }}>INTERESTS</Text>
          <TextInput
            style={styles.signupInput}
            value={interest1}
            onChangeText={(text) => setInterest1(text)}
          />
          <TextInput
            style={styles.signupInput}
            value={interest2}
            onChangeText={(text) => setInterest2(text)}
          />
          <TextInput
            style={styles.signupInput}
            value={interest3}
            onChangeText={(text) => setInterest3(text)}
          />
        </View>
        <View style={{ marginHorizontal: 24, marginBottom: 48 }}>
          <Text style={{ fontSize: 16, color: '#8e93a1' }}>ABOUT ME</Text>
          <TextInput
            style={styles.largeTextInput}
            value={bio}
            onChangeText={(text) => setBio(text)}
            multiline={true}
          />
        </View>
        <View style={{ marginHorizontal: 24, marginBottom: 48 }}>
          <Text style={{ fontSize: 16, color: '#8e93a1' }}>GENDER</Text>
          <Picker
            selectedValue={gender}
            onValueChange={(value) => setGender(value)}
          >
            <Picker.Item label="Select Gender" value="" />
            {genderOptions.map((option) => (
              <Picker.Item key={option.label} label={option.label} value={option.value} />
            ))}
          </Picker>
        </View>
        <View style={{ marginHorizontal: 24, marginBottom: 48 }}>
          <Text style={{ fontSize: 16, color: '#8e93a1' }}>PREFERENCES</Text>
          <Picker
            selectedValue={preferences}
            onValueChange={(value) => setPreferences(value)}
          >
            <Picker.Item label="Select Preferences" value="" />
            {preferenceOptions.map((option) => (
              <Picker.Item key={option.label} label={option.label} value={option.value} />
            ))}
          </Picker>
        </View>
        <View style={{ marginHorizontal: 24, marginBottom: 48 }}>
          <Text style={{ fontSize: 16, color: '#8e93a1' }}>DEEP SECRETS (PRIVATE BIO)</Text>
          <TextInput
            style={styles.largeTextInput}
            value={privateBio}
            onChangeText={(text) => setPrivateBio(text)}
            multiline={true}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>  
  )};  

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
        marginVertical: 16,
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
    },
    largeTextInput: {
      fontSize: 15,
      color: '#514e5a',
      borderBottomColor: '#8e93a1',
      borderBottomWidth: 0.5,
      marginBottom: 16,
      paddingVertical: 8,
      paddingHorizontal: 12,
      textAlignVertical: 'top'
  },

})


  export default PersonalProfile