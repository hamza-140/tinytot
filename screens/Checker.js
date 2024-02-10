import {useContext, useEffect, useState} from 'react';
import {Context} from '../context/AuthContext';
import {Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
const Checker = ({navigation}) => {
  const [value, setValue] = useState();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
      }}>
      <View>
        <Input
          value={value}
          placeholder="Enter"
          onChangeText={text => {
            setValue(text);
          }}></Input>
        <Button
          title={'Submit'}
          onPress={() => navigation.navigate('Vocabulary', value)}></Button>
      </View>
    </View>
  );
};

export default Checker;
