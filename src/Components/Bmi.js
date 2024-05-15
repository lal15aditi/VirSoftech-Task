import React, { useState } from 'react'

function Bmi() {
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const [bmi, setBmi] = useState(0);
    const [result, setResult] = useState('')

    // const handleAge = (e) => {
    //     // setShowDetails(false);
    //     setAge(e.target.value);
    // }

    // const handleGender = (e) => {
    //     // setShowDetails(false);
    //     setGender(e.target.value);
    // }

    // const handleHeight = (e) => {
    //     setHeight(e.target.value);
    // }

    // const handleWeight = (e) => {
    //     setWeight(e.target.value);
    // }

    const calculateBMI = () => {
        //convert height from inches to 'm'
        const ht = height*2.54/100;
        const bmiValue = (weight/(ht*ht)).toFixed(1);//for one digit after decimal point
        setBmi(bmiValue);
        if(gender === 'male') {
            if(bmi < 18.5) 
                setResult('UnderWeight');
            else if(bmi >= 18.5 && bmi <= 24.9) 
                setResult('Normal weight');
            else if(bmi >= 25 && bmi <= 29.9) 
                setResult('Overweight');
            else 
                setResult('Obesity');
        }
        else if(gender === 'female') {
            if(bmi < 20.5) 
                setResult('UnderWeight');
            else if(bmi >= 20.5 && bmi <= 26.9) 
                setResult('Normal weight');
            else if(bmi >= 27 && bmi <= 31.9) 
                setResult('Overweight');
            else 
                setResult('Obesity');
        }
    }
    return (
        <div className='main'>
            <label htmlFor="age">Age: </label>
            <input 
            type="number" 
            min={2} 
            max={100} 
            id='age' 
            placeholder='Enter Age' 
            value={age} 
            onChange={(e) => setAge(e.target.value)}
            />
            <br />

            <label htmlFor="Gender">Gender: </label>
            <select type="text" id='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="" disabled selected hidden>Select your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <br />

            <label htmlFor="height">Height: </label>
            <input type="number"
             id='height' 
             placeholder='Enter Height in inches' 
             step={0.1} 
             value={height} 
             onChange={(e) => setHeight(e.target.value)}
             />
            <br />

            <label htmlFor="weight">Weight: </label>
            <input type="text"
             id='weight' 
             placeholder='Enter Weight in kg' 
             value={weight} 
             onChange={(e) => setWeight(e.target.value)}
             />
            <br />

            <button onClick={calculateBMI()}>Compute BMI</button>

            {
                bmi > 0 && (
                <>
                    <div>BMI : {bmi} kg/m^2</div>
                    <div>BMI Category : {result}</div>
                </>
            )}
        </div>
    )
}

export default Bmi