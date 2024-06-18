import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './FormA.css';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Link } from 'react-router-dom';
import Home from "./Home";


const FormA = () => {

  const [name, setName] = useState('');
  //const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('formAData');
    if (storedData) {
      const { name, phoneNumber } = JSON.parse(storedData);
      setName(name);
     setPhoneNumber(phoneNumber);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/form', {
        formType: 'A',
        name,
        phoneNumber,
        
      });
      localStorage.setItem('formAData', JSON.stringify({ name, phoneNumber }));
      setFormSubmitted(true);
      alert("Form is submitted");
      // <Link to="/" >Home</Link>
    } catch (error) {
      console.error(error);
    }
    if (formSubmitted) {
      setFormSubmitted(false);
      // alert("Form is submitted");
    }
  };


  return (
    <div className="form1">
      <div className='inner-container-Form-AB'>
        <h3>Form A</h3>
        <form onSubmit={handleSubmit}>
          <div className="details">
            <label htmlFor="">
              Full Name
              <input type="text" placeholder='John'
               value={name}
               onChange={(e) => setName(e.target.value)}
               required />
            </label>
          </div>
          <div className="Country-code">
            <label htmlFor="">Phone Number</label>
            <PhoneInput
              international
              defaultCountry="IN"
              value={phoneNumber}
              onChange={setPhoneNumber} />
          </div>
          <div className="btn-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormA;



