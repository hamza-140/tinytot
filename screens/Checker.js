// import {useContext, useEffect} from 'react';
// import {Context} from '../context/AuthContext';
// const Checker = () => {
//   const {state, signup, clearErrorMessage, tryLocalSignIn} =
//     useContext(Context);

//   useEffect(() => {
//     tryLocalSignIn();
//   }, []);
//   return null;
// };

// export default Checker;
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import storage from '@react-native-firebase/storage';

const LessonScreen = ({navigation}) => {
  const [animalFiles, setAnimalFiles] = useState([]);

  useEffect(() => {
    // Function to fetch file names from Firebase Storage
    const fetchAnimalFiles = async () => {
      try {
        // Get reference to the "Animals" folder
        const folderRef = storage().ref('lessons/English/Phonics/Animals');

        // List all items (files and folders) in the "Animals" folder
        const items = await folderRef.listAll();

        // Extract file names from the items list
        const fileNames = items.items.map(item => item.name);

        // Save file names to state
        setAnimalFiles(fileNames);
      } catch (error) {
        console.error('Error fetching animal files:', error);
      }
    };

    // Fetch animal file names from Firebase Storage
    fetchAnimalFiles();
  }, []);
  const handleItemPress = fileName => {
    // Navigate to the Phonics screen with the selected file name as a parameter
    navigation.navigate('Phonics', fileName);
  };

  return (
    <View>
      <Text>Animal Files:</Text>
      {animalFiles.map(fileName => (
        <TouchableOpacity
          key={fileName}
          onPress={() => handleItemPress(fileName)}>
          <Text>{fileName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LessonScreen;
