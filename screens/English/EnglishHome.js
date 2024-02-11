import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Card from '../../components/Card';

const EnglishHome = ({navigation}) => {
  const start = id => {
    if (id == 1) {
      navigation.navigate('Alphabets');
    }
    if (id == 2) {
      navigation.navigate('Games');
    }
    if (id == 3) {
      navigation.navigate('Trace');
    }
  };
  const data = [
    {id: '1', title: 'Alphabet'},
    {id: '2', title: 'Games'},
    {id: '3', title: 'Tracing'},
    {id: '4', title: 'Quiz'},
    {id: '5', title: 'Lessons'},
  ];
  const renderCard = ({item}) => (
    <Card letter={item.title} onPress={() => start(item.id)} heading1={true} />
  );

  return (
    <ImageBackground
      source={require('../../assets/bg.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <FlatList
          data={data}
          horizontal
          renderItem={renderCard}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
        <Image
          source={require('../../assets/panda.png')}
          style={styles.overlayImage}
        />
        <TouchableOpacity
          style={styles.setting}
          onPress={() => {
            navigation.navigate('Main');
          }}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.settingimg}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default EnglishHome;
const cardWidth = 150;
const cardMarginHorizontal = 20;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: cardWidth,
    height: 150,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: cardMarginHorizontal, // Add margin between cards
  },
  cardText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  overlayImage: {
    position: 'absolute',
    bottom: 10,
    left: 100,
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  setting: {
    position: 'absolute',
    top: 0,
    left: -30,
  },
  settingimg: {
    width: 130,
    height: 60,
    resizeMode: 'cover',
  },
  sound: {
    position: 'absolute',
    top: 0,
    left: 5,
  },
  soundimg: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
});
