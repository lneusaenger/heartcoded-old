import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PersonalProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [interests, setInterests] = useState('');
  const [publicBio, setPublicBio] = useState('');
  const [currMatches, setCurrMatches] = useState('');
  const [seen, setSeen] = useState('');
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
    <View style={styles.container}>
      <Text style={styles.title}>Personal Profile</Text>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Upload Image" onPress={pickImage} />
      <Text style={styles.inputTitle}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Your Name"
      />
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
      <Text style={styles.inputTitle}>Current Matches:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCurrMatches}
        value={currMatches}
        placeholder="Your Current Matches"
      />
      <Text style={styles.inputTitle}>Seen:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSeen}
        value={seen}
        placeholder="Seen"
      />
      <Text style={styles.inputTitle}>Deep Secrets:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDeepSecrets}
        value={deepSecrets}
        placeholder="Your Deep Secrets"
      />
      <Button title="Save Changes" onPress={() => console.log("Changes saved!")} />
    </View>
  );
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
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    margin: 10,
    width: '80%',
  },
});
