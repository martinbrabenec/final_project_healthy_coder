import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../context/UserContext';

export default function Login(props) {
    const { getUser } = useContext(UserContext);
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            // Make the AJAX request using axios
            const response = await axios.post('/login', values);

            // If login is successful, redirect to home page
            if (response.status === 200) {
                getUser();
                navigate('/');
            }
        } catch (error) {
            if (error.response) {
                switch (error.response.status) {
                    case 422:
                        // Handle validation errors here
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
        <form action="/login" method="post" onSubmit={handleSubmit}>
            <input type="email" name="email" value={values.email} onChange={handleChange} />
            <input type="password" name="password" value={values.password} onChange={handleChange} />
            <button>Login</button>
        </form>
    );
}
