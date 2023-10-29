import React, { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { BiSolidLock } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);


    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!/^\S+@\S+\.\S+$/.test(value)) {
          setEmailError('Please enter a valid email address');
        } else {
          setEmailError('');
        }
        setFormIsValid(validateForm());
      };
      
      const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (value.length < 6) {
          setPasswordError('Password must be at least 6 characters long');
        } else {
          setPasswordError('');
        }
        setFormIsValid(validateForm());
      };
      
    const validateForm = () => {
        const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
        const isPasswordValid = password.length >= 6;
        return isEmailValid && isPasswordValid;
    };

    const handleSubmit = () => {
        const isFormValid = validateForm();
        if (isFormValid) {
          // Handle form submission, e.g., send data to the server.
          setShowSuccessModal(true); // Show the success message
          setEmail(''); // Reset the email field
          setPassword(''); // Reset the password field
        }
        setFormIsValid(isFormValid);
      };
      const SuccessModal = ({ onClose }) => (
        <div className="success-modal">
          <div className="success-message">Successful Submission!</div>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      );
      


    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>NOKIA</div>
                <div className='text2'>FACILIVISS</div>
            </div>

            <div className='inputs'>
                <div className='input'>
                    <FaCircleUser className='icon' />
                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className='error-message'>{emailError}</div>

                <div className='input'>
                    <BiSolidLock className='icon' />
                    <input
                        type={showPassword ? ("text") : ("password")}
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <span
                        className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiFillEye fontSize={24} fill='#AFB2BF' />) :

                            (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                    </span>
                </div>

                <div className='error-message'>{passwordError}</div>
            </div>
            <div className="forget">
                Forgot password <span>?</span>
            </div>
            <div className="submit">
                <button
                    onClick={handleSubmit}
                    disabled={!formIsValid} className="sub">Submit</button>
            </div>
            {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}
        </div>
    );
};

export default Login;
