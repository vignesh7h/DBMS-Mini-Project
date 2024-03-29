import React, { useState } from 'react';
import Customer from './Customer';

const AddCustomer = () => {
  const [ CustomerName, setCustomerName] = useState('');

  const [CustomerId, setCustomerId] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form submitted:', { CustomerName,CustomerId });
    // Clear form fields after submission
    setCustomerName('');
    
    setCustomerId('');
    
  };

  return (
    <div className=' card w-96 bg-base-100 shadow-xl rounded-2xl bg-slate-300'>
      <h2 className='card-title'>Add New Customer</h2>
      <form onSubmit={handleSubmit}>
   <div><label htmlFor="productName">Customer Name:</label></div>   
        <div>
         
          <input
          className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="text"
            id="CustomerName"
            value={CustomerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div><label htmlFor="productName">Customer ID:</label></div>   
        <div>
         
          <input
          className="input input-bordered input-primary w-full rounded-2xl max-w-xs"
            type="text"
            id="CustomerId"
            value={CustomerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </div>
  
  
    
        
        <div className="p-1 text-center">
        <button className="pl-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add Customer</button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
