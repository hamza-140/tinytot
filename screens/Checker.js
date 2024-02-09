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
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Checker = () => {
  const [word, setWord] = useState('CAT');
  const [letters, setLetters] = useState(['C', 'A', 'T']);

  const handleLetterPress = index => {
    // Logic to handle letter press/drag
    // For simplicity, let's remove the letter when pressed
    const newLetters = [...letters];
    newLetters.splice(index, 1);
    setLetters(newLetters);
  };

  const handleSoundPress = () => {
    // Logic to play sound
    // For simplicity, let's just log a message
    console.log('Playing sound for word:', word);
  };

  const handleResetPress = () => {
    // Logic to reload the screen
    // For simplicity, let's just reset the state
    setWord('CAT');
    setLetters(['C', 'A', 'T']);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSoundPress}>
        <Text style={styles.sound}>{word}</Text>
      </TouchableOpacity>
      <View style={styles.lettersContainer}>
        {letters.map((letter, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleLetterPress(index)}
            style={styles.letter}>
            <Text>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={handleResetPress} style={styles.resetButton}>
        <Icon name="refresh" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sound: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lettersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  resetButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default Checker;
