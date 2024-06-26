import React, { useState } from 'react';
import Customer from './Customer';

const Addemployee = () => {
  const [CustomerName, setCustomerName] = useState('');
  const [branch, setBranch] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form submitted:', { productName, branch, description, quantity });
    // Clear form fields after submission
    setCustomerName('');
    setBranch('');
    setDescription('');
    setQuantity('');
  };

  return (
    <div className=' card w-96 bg-base-100 shadow-xl rounded-2xl bg-slate-300'>
      <h2 className='card-title'>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Employee Name:</label>
          <input
            className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="text"
            id="CustomerName"
            value={CustomerName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="branch">Select Branch:</label>
          <select
            className='rounded-2xl input input-bordered input-primary w-full max-w-xs'
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          >
            <option value="">Select a branch</option>
            {/* Replace this with your branch options */}
            <option value="branch1">Branch 1</option>
            <option value="branch2">Branch 2</option>
          </select>
        </div>


        <div className="p-1 text-center">
          <button className="pl-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add Employee</button>
        </div>
      </form>
    </div>
  );
};

export default Addemployee;
