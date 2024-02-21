import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import storage from '@react-native-firebase/storage';

const File = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const folderRef = storage().ref('lessons/Math/Numbers/');
        const items = await folderRef.listAll();
        const filesData = await Promise.all(
          items.items.map(async item => {
            const url = await item.getDownloadURL();
            console.log('URL for ' + item.name + ':', url); // Log URL for debugging
            return {name: item.name, url};
          }),
        );
        setFiles(filesData);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  const renderItem = ({item}) => (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
      <Image
        source={{uri: item.url}}
        style={{width: 50, height: 50, marginRight: 10}}
      />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={files}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      ListEmptyComponent={<Text>No files found</Text>}
    />
  );
};

export default File;
