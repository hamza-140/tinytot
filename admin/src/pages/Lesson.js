import React, {useState} from 'react';
import {getStorage, ref, uploadBytes} from 'firebase/storage';
import {db} from '../firebase.config'; // Adjust the path to firebase.config

function Lesson() {
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  const handleFileUpload = async () => {
    if (!file) {
      console.error('No file selected.');
      return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, 'lessons/' + file.name);

    try {
      await uploadBytes(storageRef, file);
      console.log('File uploaded successfully!');
      setUploadError(null); // Resetting error state if upload is successful
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadError('Error uploading file. Please try again.'); // Setting error state
    }
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleFileUpload}>Upload Lesson</button>
      {uploadError && <p style={{color: 'red'}}>{uploadError}</p>}
    </div>
  );
}

export default Lesson;
