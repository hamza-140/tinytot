import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {
  const [kidInfo, setKidInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKidInfo = async () => {
      try {
        const currentUser = auth().currentUser;
        if (currentUser) {
          const parentRef = firestore()
            .collection('parents')
            .doc(currentUser.uid);
          const parentDoc = await parentRef.get();

          if (parentDoc.exists) {
            const parentData = parentDoc.data();
            // Assuming kid info is directly stored in the parent document
            const kidInfoFromParent = parentData.kidInfo;
            if (kidInfoFromParent) {
              setKidInfo(kidInfoFromParent);
            } else {
              console.log('Kid info not found in parent document');
            }
          } else {
            console.log('Parent document not found');
          }
        } else {
          console.log('User not logged in');
        }
      } catch (error) {
        console.log('Error fetching kid info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchKidInfo();
  }, []);

  return (
    <>
      <View style={{backgroundColor: '#D27777', padding: 20}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="backward" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : kidInfo ? (
          <View>
            <Text style={styles.title}>Kid Info</Text>
            <View style={styles.inputContainer}>
              <Text style={{color: 'cyan', fontWeight: 'bold'}}>
                Name: {kidInfo.name}
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={{color: 'cyan', fontWeight: 'bold'}}>
                Age: {kidInfo.age}
              </Text>
              {/* Add more fields as needed */}
            </View>
          </View>
        ) : (
          <Text>No kid info found</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#D27777',
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    padding: 10,
    marginBottom: 16,
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#42b0f4',
    borderRadius: 8,
  },
});
export default Profile;
