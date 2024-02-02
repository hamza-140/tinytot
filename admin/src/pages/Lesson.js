// import React, {useState} from 'react';

// const Lesson = () => {
//   const [lessonData, setLessonData] = useState({
//     title: '',
//     description: '',
//     level: '',
//     duration: '',
//   });

//   const [image, setImage] = useState(null);
//   const [audio, setAudio] = useState(null);
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = e => {
//     const {name, value} = e.target;
//     setLessonData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = e => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleAudioChange = e => {
//     if (e.target.files[0]) {
//       setAudio(e.target.files[0]);
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     // Your existing logic for image and audio upload to Firebase
//     // ...

//     // Assuming you have retrieved download URLs for image and audio
//     const imageUrl = 'your_image_download_url';
//     const audioUrl = 'your_audio_download_url';

//     // Update the state with the submitted data
//     setSubmittedData({
//       ...lessonData,
//       imageUrl,
//       audioUrl,
//     });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column',
//         height: '100vh',
//         background: '#f4f4f4',
//       }}>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           background: '#fff',
//           padding: '20px',
//           borderRadius: '8px',
//           boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//           marginBottom: '20px',
//         }}>
//         <h2 style={{textAlign: 'center'}}>Add a New Lesson</h2>
//         <label style={{display: 'block', marginBottom: '10px'}}>
//           Title:
//           <input
//             type="text"
//             name="title"
//             value={lessonData.title}
//             onChange={handleChange}
//             placeholder="Lesson Title"
//             style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}
//           />
//         </label>
//         <label style={{display: 'block', marginBottom: '10px'}}>
//           Description:
//           <textarea
//             name="description"
//             value={lessonData.description}
//             onChange={handleChange}
//             placeholder="Lesson Description"
//             style={{
//               width: '100%',
//               padding: '8px',
//               boxSizing: 'border-box',
//               resize: 'none', // Disable resize
//             }}
//           />
//         </label>
//         <label style={{display: 'block', marginBottom: '10px'}}>
//           Level:
//           <input
//             type="text"
//             name="level"
//             value={lessonData.level}
//             onChange={handleChange}
//             placeholder="Lesson Level"
//             style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}
//           />
//         </label>
//         <label style={{display: 'block', marginBottom: '10px'}}>
//           Lesson Image:
//           <input type="file" onChange={handleImageChange} />
//         </label>
//         {image && (
//           <img
//             src={URL.createObjectURL(image)}
//             alt="Lesson Image"
//             style={{maxWidth: '100%', marginBottom: '10px'}}
//           />
//         )}
//         <label style={{display: 'block', marginBottom: '10px'}}>
//           Lesson Audio:
//           <input type="file" onChange={handleAudioChange} accept="audio/*" />
//         </label>
//         {audio && <audio controls src={URL.createObjectURL(audio)} />}
//         <label style={{display: 'block', marginBottom: '10px'}}>
//           Duration:
//           <input
//             type="text"
//             name="duration"
//             value={lessonData.duration}
//             onChange={handleChange}
//             placeholder="Lesson Duration"
//             style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}
//           />
//         </label>
//         <button
//           type="submit"
//           style={{
//             background: '#4caf50',
//             color: '#fff',
//             padding: '10px',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//           }}>
//           Submit
//         </button>
//       </form>

//       {/* Display submitted data if available */}
//       {submittedData && (
//         <div
//           style={{
//             background: '#fff',
//             padding: '20px',
//             borderRadius: '8px',
//             boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//           }}>
//           <h2 style={{textAlign: 'center'}}>Submitted Lesson Data</h2>
//           <p>Title: {submittedData.title}</p>
//           <p>Description: {submittedData.description}</p>
//           <p>Level: {submittedData.level}</p>
//           <p>Lesson Image:</p>
//           <img
//             src={submittedData.imageUrl}
//             alt="Submitted Lesson Image"
//             style={{maxWidth: '100%'}}
//           />
//           <p>Lesson Audio:</p>
//           <audio controls src={submittedData.audioUrl} />
//           <p>Duration: {submittedData.duration}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Lesson;
import React, {useState} from 'react';
import ResponsiveVoice from 'responsive-voice-js';

const Lesson = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = text => {
    ResponsiveVoice.speak(text, 'US English Female', {rate: 0.9});
    setIsSpeaking(true);
  };

  const stopSpeaking = () => {
    ResponsiveVoice.cancel();
    setIsSpeaking(false);
  };

  return (
    <div>
      <p>{isSpeaking ? 'Speaking...' : 'Tap to speak'}</p>
      <button onClick={() => speakText('Hello!')} disabled={isSpeaking}>
        Speak Text
      </button>
      <button onClick={stopSpeaking} disabled={!isSpeaking}>
        Stop Speaking
      </button>
    </div>
  );
};

export default Lesson;
