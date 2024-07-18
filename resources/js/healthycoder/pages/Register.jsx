import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../context/UserContext';

export default function Register() {
  const { getUser } = useContext(UserContext);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/register', values);
      if (response.status === 201) {
        await getUser();
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 422:
            console.log('VALIDATION FAILED:', error.response.data.errors);
            break;
          default:
            console.log('UNKNOWN ERROR', error.response.data);
            break;
        }
      } else {
        console.log('ERROR', error.message);
      }
    }
  };

  const handleChange = (event) => {
    setValues(previous_values => ({
      ...previous_values, [event.target.name]: event.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="Password" />
      <input type="password" name="password_confirmation" value={values.password_confirmation} onChange={handleChange} placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  );
}
