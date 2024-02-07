import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="slideInDown" style={styles.title}>
        Parent Registeration
      </Animatable.Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={{color: 'black'}}>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D27777',
    padding: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#42b0f4',
    borderRadius: 8,
  },
});
export default Signup;
