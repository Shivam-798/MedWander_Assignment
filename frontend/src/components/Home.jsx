import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Home.css'
import axios from 'axios';

const Home = () => {

  const handleSync = async () => {
    try {
      await axios.get('http://localhost:5000/api/sync');
      alert('Data synchronized successfully');
    } catch (error) {
      console.error('Error synchronizing data:', error);
      alert('Error synchronizing data');
    }
  };

  return (
    <div className="main-container-Home">
      <div className="inner-container-Home">
        <div className="left-Home">
          <h1>Looking for Best Medical Treatments and Surgeries in India?</h1>
          <div className="form-container">
            <Link to="/formA"><button className='form-btn btn-A'>Form A</button></Link>
            <Link to="/formB"><button className='form-btn btn-B'>Form B</button></Link>
            <button className='Refresh-btn' onClick={handleSync}>Refresh</button>
          </div>
        </div>
        <div className="right-Home">
          <div className="form-section">
            <div className='img-container'>
            <img src="https://media.istockphoto.com/id/1325578537/photo/happy-indian-mother-having-fun-with-her-daughter-outdoor-family-and-love-concept-focus-on-mum.jpg?s=612x612&w=0&k=20&c=oSkEIgp2zOGO-ILqE4-MbsIUKZUhKNPNSzrFpSRAUxM=" alt="" className='left-img'/>
            <h3>Let's build wellness rather than treat disease.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
