import React, { useState } from 'react';

export const ContactUs = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted!");
    console.log("Full Name:", fullName);
    console.log("Address:", address);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Description:", description);

    // You can send the form data to a server or perform any other actions
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextInput label="Full Name" value={fullName} onChangeText={setFullName} />
        <TextInput label="Address" value={address} onChangeText={setAddress} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <TextInput label="Phone" value={phone} onChangeText={setPhone} />
        <TextInput label="Email" value={email} onChangeText={setEmail} />
      </div>
      <textarea
        rows="4"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: '100%', marginTop: '10px' }}
      />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          marginTop: '20px',
          alignSelf: 'flex-end',
        }}
      >
        Submit
      </button>
    </div>
  );
};

const TextInput = ({ label, value, onChangeText }) => {
  return (
    <div style={{ flex: '1', marginRight: '10px' }}>
      <label>{label}</label>
      <input type="text" value={value} onChange={(e) => onChangeText(e.target.value)} style={{ width: '100%' }} />
    </div>
  );
};

