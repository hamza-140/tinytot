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
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigator => setNavigator(navigator)}>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="Checker"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Checker" component={Checker} />
          <Stack.Screen name="Tracing" component={Tracing} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="KidProfile" component={KidProfileScreen} />
          <Stack.Screen name="Main" component={MainMenu} />
          <Stack.Screen name="English" component={EnglishHome} />
          <Stack.Screen name="Alphabets" component={Alphabets} />
          <Stack.Screen name="Games" component={YouTubePlayer} />
          <Stack.Screen name="Trace" component={LetterTracing} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
// import {Text, View} from 'react-native';

// const App = () => {
//   return (
//     <View>
//       <Text>Hi</Text>
//     </View>
//   );
// };

// export default App;
