import React, { useState, useEffect } from 'react';

function Registration() {
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [clientID, setClientID] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    registerCompany();
  }, []);

  const registerCompany = async () => {
    const registrationData = {
      companyName: 'Train Central',
      ownerName: "Ram",
			rollNo:"1",
			ownerEmail: "Tran@abc.edu",
			accesscode: "jYjgQH"
    };

    try {
      const response = await fetch('http://20.244.56.144/train/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        const responseData = await response.json();
        setClientID(responseData.clientID);
        setClientSecret(responseData.clientSecret);
        setRegistrationStatus('Registration successful!');
      } else {
        setRegistrationStatus('Registration failed.');
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
      setRegistrationStatus('An error occurred during registration.');
    }
  };

  return (
    <div>
      <h1>Company Registration</h1>
      <p>{registrationStatus}</p>
      {clientID && <p>Client ID: {clientID}</p>}
      {clientSecret && <p>Client Secret: {clientSecret}</p>}
    </div>
  );
}

export default Registration;
