import React, {useState} from 'react';
import {getStorage, ref, uploadBytes} from 'firebase/storage';
import {db} from '../firebase.config';
import './Lesson.css'; // Import CSS file for styling

function Lesson() {
  const [file, setFile] = useState(null);
  const [lessonId, setLessonId] = useState('');
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDetail, setLessonDetail] = useState('');
  const [lessonType, setLessonType] = useState('');
  const [lessonCategory, setLessonCategory] = useState('');
  const [selectedEnglishCategory, setSelectedEnglishCategory] = useState('');
  const [uploadError, setUploadError] = useState(null);

  const handleFileUpload = async () => {
    const storage = getStorage();
    const storageRef = ref(
      storage,
      `lessons/${lessonCategory}/${selectedEnglishCategory}/${lessonTitle}/${lessonDetail}`,
    );

    try {
      await uploadBytes(storageRef, file);
      console.log('File uploaded successfully!');
      setUploadError(null);
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadError('Error uploading file. Please try again.');
    }
  };

  // Function to handle lesson type change
  const handleLessonTypeChange = e => {
    setLessonType(e.target.value);
    // Clear file state when lesson type changes
    setFile(null);
  };

  return (
    <div className="lesson-container">
      <h2>Upload Lesson</h2>
      <div className="lesson-form">
        <input
          type="text"
          placeholder="Lesson Title"
          value={lessonTitle}
          onChange={e => setLessonTitle(e.target.value)}
        />
        <select value={lessonType} onChange={handleLessonTypeChange}>
          <option value="">Select Lesson Type</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
          <option value="photo">Photo</option>
        </select>
        <select
          style={{marginTop: 20}}
          value={lessonCategory}
          onChange={e => setLessonCategory(e.target.value)}>
          <option value="">Select Lesson Category</option>
          <option value="English">English</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
        </select>
        {lessonCategory === 'English' && (
          <select
            style={{marginTop: 20}}
            value={selectedEnglishCategory}
            onChange={e => setSelectedEnglishCategory(e.target.value)}>
            <option value="">Select English Category</option>
            <option value="Phonics">Phonics</option>
            <option value="Vocabulary">Vocabulary</option>
            <option value="Quizzes">Quizzes</option>
            <option value="Stories">Stories</option>
          </select>
        )}
        {lessonType === 'text' ? (
          <input
            style={{marginTop: 20}}
            type="text"
            placeholder="Lesson Detail"
            value={lessonDetail}
            onChange={e => setLessonDetail(e.target.value)}
          />
        ) : (
          <input
            style={{marginTop: 20}}
            type="file"
            onChange={e => setFile(e.target.files[0])}
          />
        )}
        <button style={{marginTop: 20}} onClick={handleFileUpload}>
          Upload Lesson
        </button>
      </div>
      {uploadError && <p className="error-message">{uploadError}</p>}
    </div>
  );
}

export default Lesson;
