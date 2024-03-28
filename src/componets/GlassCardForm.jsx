import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GlassCardForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [userType, setUserType] = useState('employee');
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Create a JSON object with the user data
    const userData = {
      username: username,
      password: password,
      userType: userType
    };

    // Send the user data to the backend using fetch
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        console.log('Login successful!');
        setIsOpen(false); // Close the form after login attempt
      } else {
        console.log('Login failed!');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }

    if (userData.userType === 'employee') {
      navigate('/employee')
    } else {
      navigate('/admin')
    }

  };


  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="glass-card-container">
      <button
        className="text-white bg-transparent border border-teal-600 rounded-md px-3 py-1 hover:bg-teal-200 hover:text-gray-800"
        onClick={() => setIsOpen(true)}
      >
        Login
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="rounded-lg shadow-2xl shadow-teal-600 shadowbg-opacity-70 backdrop-blur-sm border border-teal-600 px-20 py-20">
            <h2 className="text-3xl text-white font-medium mb-2">Login <button className="absolute top-3 right-3 text-white text-2xl leading-none hover:text-teal-200"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button></h2>
            <div className="form-group text-white mb-3">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-teal-500 text-black"
                required
              />
            </div>
            <div className="form-group text-white mb-3">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-300 rounded-md px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-teal-500 text-black"
                required
              />
            </div>
            <div className="form-group flex items-center mb-4 text-white">
              <input
                type="radio"
                id="employee"
                name="userType"
                value="employee"
                checked={userType === 'employee'}
                onChange={handleUserTypeChange}
              />
              <label htmlFor="employee" className="ml-2">
                Employee
              </label>
              <input
                type="radio"
                id="admin"
                name="userType"
                value="admin"
                checked={userType === 'admin'}
                onChange={handleUserTypeChange}
                className="ml-4"
              />
              <label htmlFor="admin" className="ml-2">
                Admin
              </label>
            </div>
            <div className='flex justify-center'>
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-md px-3 py-1 font-medium"
                onClick={handleLogin}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Add this line to export the component
export default GlassCardForm;
