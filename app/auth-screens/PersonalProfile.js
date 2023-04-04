import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const PersonalProfile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [interests, setInterests] = useState('');
  const [publicBio, setPublicBio] = useState('');
  const [deepSecrets, setDeepSecrets] = useState('');
  const [image, setImage] = useState(null);

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://cdn.dribbble.com/users/64389/screenshots/1539461/media/1ab92a81a3936453092c29e0eccf7c09.gif' }}
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Heartcoded {'<3'} </Text>
        <Text style={styles.title}>Time to make your profile! </Text>

        <Button title="Upload Image" onPress={pickImage} />

        <View style={{ height: 20 }} />

        <Text style={styles.inputTitle}>Name:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Your Name"
          />
        </View>

        <Text style={styles.inputTitle}>Age:</Text>

        <TextInput
          style={styles.input}
          onChangeText={setAge}
          value={age}
          placeholder="Your Age"
          keyboardType="numeric"
        />

        <Text style={styles.inputTitle}>Interests:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setInterests}
          value={interests}
          placeholder="Your Interests"
        />

        <Text style={styles.inputTitle}>Public Bio:</Text>

        <TextInput
          style={styles.input}
          onChangeText={setPublicBio}
          value={publicBio}
          placeholder="Your Public Bio"
        />

        <Text style={styles.inputTitle}>Deep Secrets:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDeepSecrets}
          value={deepSecrets}
          placeholder="Your Deep Secrets"
        />

        <View style={{ height: 20 }} />

        <Button title="Save Changes" onPress={() => console.log("Changes saved!")} />

        <View style={{ height: 20 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTitle: {
      fontWeight: 'bold',
      margin: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 8,
      margin: 10,
      width: '80%',
    },
  });