import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import {db} from '../../firebase.config';
import './Dashboard.css'; // Import your CSS file for Dashboard styles

// Function to fetch all parents from Firestore
const fetchAllParents = async () => {
  const parentsList = [];
  const querySnapshot = await getDocs(collection(getFirestore(), 'parents'));
  querySnapshot.forEach(doc => {
    parentsList.push({id: doc.id, ...doc.data()});
  });
  return parentsList;
};

const Dashboard = () => {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    // Fetch all parents when the component mounts
    const fetchData = async () => {
      const parentsList = await fetchAllParents();
      setParents(parentsList);
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div className="dashboard-container">
      <ul className="parent-list">
        <h1>List of Parents</h1>
        {parents.map(parent => (
          <li key={parent.id} className="parent-item">
            <div className="parent-details">
              <div>
                <strong>Parent ID:</strong> {parent.id}
              </div>
              <div>
                <strong>Name:</strong> {parent.name}
              </div>
              <div>
                <strong>Email:</strong> {parent.email}
              </div>
              {/* Add more fields as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
