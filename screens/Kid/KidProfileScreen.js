import firestore from '@react-native-firebase/firestore';

import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const KidProfileScreen = ({navigation, route}) => {
  const addKidProfile = async () => {
    try {
      // Reference to the "kidProfiles" collection in Firestore
      const response = await auth().signInWithEmailAndPassword(
        'hamza@mail.com',
        '123456',
      );

      // Retrieve the user UID from the response
      const userUid = response.user.uid;
      const parentUid = userUid;
      console.log(parentUid);
      const kidProfileRef = firestore().collection('kidProfiles');

      // Add a document to the "kidProfiles" collection
      const docRef = await kidProfileRef.add({
        parentUid,
        kidName,
      });

      console.log('Kid profile added successfully! Document ID:', docRef.id);
      navigation.navigate('Main');
    } catch (error) {
      console.error('Error adding kid profile:', error);
    }
  };
  const CustomAvatar = ({imageSource, onPress, isSelected}) => (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={imageSource}
        style={[
          styles.avatarImage,
          isSelected && {borderColor: 'green', borderWidth: 2},
        ]}
      />
    </TouchableOpacity>
  );

  const renderAvatars = () => {
    const avatarImages = [
      require('../../assets/images/avatars/fox.png'),
      require('../../assets/images/avatars/bear.png'),
      require('../../assets/images/avatars/penguin.png'),
      require('../../assets/images/avatars/dog.png'),
    ];

    return avatarImages.map((imageSource, index) => (
      <CustomAvatar
        key={index}
        imageSource={imageSource}
        onPress={() => setSelectedAvatar(imageSource)}
        isSelected={selectedAvatar === imageSource}
      />
    ));
  };

  const [kidName, setKidName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Kid's Profile</Text>
      <Input
        placeholder="Kid's Name"
        placeholderTextColor={'#fff'}
        onChangeText={text => setKidName(text)}
        style={styles.input}
      />
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarLabel}>Choose Avatar:</Text>
        <View style={styles.avatars}>{renderAvatars()}</View>
      </View>
      <Button
        title="Add Profile"
        buttonStyle={styles.button}
        onPress={addKidProfile}
        disabled={!kidName || !selectedAvatar}
      />
    </View>
  );
};

export default KidProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EB6D6D',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 8,
  },
  avatarContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  avatarLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  avatars: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    margin: 5,
  },
  button: {
    backgroundColor: '#42b0f4',
    borderRadius: 8,
  },
});
