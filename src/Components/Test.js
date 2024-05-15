import React, { useState } from 'react';
import './Test.css';

function Test() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [bmi, setBMI] = useState(0);
  const [bmiCategory, setBMICategory] = useState('');

  const [ageErr, setAgeErr] = useState(false);
  const [heightErr, setHeightErr] = useState(false);
  const [genderErr, setGenderErr] = useState(false);
  const [weightErr, setWeightErr] = useState(false);

  const calculateBMI = () => {
    if(age<2 || age>100)
        setAgeErr(true);
    else
        setAgeErr(false);
    if(heightInches<24 || heightInches>96)
        setHeightErr(true);
    else
        setHeightErr(false);
    if(isNaN(weightKg) || weightKg<0 || weightKg == '')
        setWeightErr(true);
    else
        setWeightErr(false);
    if(gender ==='')
        setGenderErr(true);
    else
        setGenderErr(false);

    if(ageErr || heightErr || weightErr || genderErr) return 0;


    const heightMeters = heightInches * 0.0254;
    console.log(heightInches, heightMeters);
    const bmiValue = weightKg / (heightMeters * heightMeters);
    setBMI(bmiValue.toFixed(1));

    if (gender === 'Male') {
      if (bmiValue < 18.5) {
        setBMICategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setBMICategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setBMICategory('Overweight');
      } else {
        setBMICategory('Obesity');
      }
    } else {
      if (bmiValue < 20.5) {
        setBMICategory('Underweight');
      } else if (bmiValue >= 20.5 && bmiValue <= 26.9) {
        setBMICategory('Normal weight');
      } else if (bmiValue >= 27 && bmiValue <= 31.9) {
        setBMICategory('Overweight');
      } else {
        setBMICategory('Obesity');
      }
    }
  };

  return (
    <div className='main'>
      <div>
        <label htmlFor="age">Age: </label>
        <input 
          type="number" 
          id="age" 
          min={2} 
          max={100} 
          value={age} 
          placeholder='Enter Age'
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      {ageErr && <small>Age must be in between 2-100</small>}
      <div>
        <label htmlFor="gender">Gender: </label>
        <select 
          id="gender" 
          value={gender} 
          onChange={(e) => setGender(e.target.value)}
        >
            <option value="" disabled selected hidden>Select your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
      </div>
      {genderErr && <small>Please select any gender</small>}
      <div>
        <label htmlFor="heightInches">Height (in inches): </label>
        <input 
          type="number" 
          id="heightInches" 
          min={24} 
          max={96} 
          step={0.1} 
          value={heightInches} 
          placeholder='Enter Height'
          onChange={(e) => setHeightInches(e.target.value)}
        />
      </div>
      {heightErr && <small>Height must be in between 24-96 inches</small>}
      <div>
        <label htmlFor="weightKg">Weight (in kg): </label>
        <input 
          type="text" 
          id="weightKg" 
          min={0} 
          step={0.1} 
          value={weightKg} 
          placeholder='Enter Weight'
          onChange={(e) => setWeightKg(e.target.value)}
        />
      </div>
      {weightErr && <small>Weight must be a positive number</small>}
      <div>
        <button onClick={calculateBMI}>Compute BMI</button>
      </div>
      {bmi > 0 && (
        <div style={{flexDirection: 'column', fontWeight:'bold', color: bmiCategory === 'Normal weight'? 'blue': 'red'}}>
          <p>BMI: {bmi}</p>
          <p>BMI Category: {bmiCategory}</p>
        </div>
      )}
    </div>
  );
}

export default Test;
