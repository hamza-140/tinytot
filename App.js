/* eslint-disable prettier/prettier */
/* 
                                                ============================
                                                | IMPORTS AND DEPENDENCIES |  
                                                ============================
*/

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainMenu from './screens/Home/MainMenu';
import Alphabets from './screens/English/Alphabets';
import {Provider as AuthProvider} from './context/AuthContext';
import EnglishHome from './screens/English/EnglishHome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import YouTubePlayer from './components/YoutubePlayer';
import LetterTracing from './screens/LetterTracing';
// import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import KidProfileScreen from './screens/Kid/KidProfileScreen';
import Tracing from './screens/English/Tracing';
import {setNavigator} from './ref/navigationRef';
import Login from './screens/Login/Login';
import Checker from './screens/Checker';
import TestScreen from './TestScreen';
import Phonics from './screens/English/Phonics';
import Vocabulary from './screens/English/Vocabulary';
import MathHome from './screens/Math/MathHome';
import ScienceHome from './screens/Science/ScienceHome';
import WorkbookHome from './screens/Workbook/WorkbookHome';
import PhonicsLessons from './screens/English/PhonicsLessons';
import EnglishLessons from './screens/English/EnglishLessons';
import Profile from './screens/Profile';
import PhonicsHome from './screens/English/PhonicsHome';
import PhonicsVideo from './screens/English/PhonicsVideo';
import PhonicsVideoList from './screens/English/PhonicsVideoList';
import MathLessons from './screens/Math/MathLessons';
import Numbers from './screens/Math/Numbers';
import File from './File';
import EnglishQuiz from './screens/English/EnglishQuiz';
import AlphabetGame from './screens/English/Alphabets/AlphabetGame';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigator => setNavigator(navigator)}>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="Checker"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Test" component={TestScreen} />
          <Stack.Screen name="AlphabetGame" component={AlphabetGame} />
          <Stack.Screen name="Checker" component={Checker} />
          <Stack.Screen name="Tracing" component={Tracing} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="KidProfile" component={KidProfileScreen} />
          <Stack.Screen name="Main" component={MainMenu} />
          <Stack.Screen name="English" component={EnglishHome} />
          <Stack.Screen name="EnglishQuiz" component={EnglishQuiz} />
          <Stack.Screen name="EnglishLessons" component={EnglishLessons} />
          <Stack.Screen name="MathLessons" component={MathLessons} />
          <Stack.Screen name="Math" component={MathHome} />
          <Stack.Screen name="Science" component={ScienceHome} />
          <Stack.Screen name="Workbook" component={WorkbookHome} />
          <Stack.Screen name="Vocabulary" component={Vocabulary} />
          <Stack.Screen name="Alphabets" component={Alphabets} />
          <Stack.Screen name="Numbers" component={Numbers} />
          <Stack.Screen name="File" component={File} />
          <Stack.Screen name="Games" component={YouTubePlayer} />
          <Stack.Screen name="Trace" component={LetterTracing} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Phonics" component={Phonics} />
          <Stack.Screen name="PhonicsLessons" component={PhonicsLessons} />
          <Stack.Screen name="PhonicsHome" component={PhonicsHome} />
          <Stack.Screen name="PhonicsVideo" component={PhonicsVideo} />
          <Stack.Screen name="PhonicsVideoList" component={PhonicsVideoList} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
