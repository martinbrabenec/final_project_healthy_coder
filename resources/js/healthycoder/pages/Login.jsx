import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login(props) {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if the CSRF token meta tag exists
        const csrfTokenElement = document.querySelector('meta[name="csrf-token"]');
        if (!csrfTokenElement) {
            console.error('CSRF token not found');
            return;
        }

        // Get the CSRF token from the meta tag
        const csrfToken = csrfTokenElement.getAttribute('content');

        try {
            // Make the AJAX request using axios
            const response = await axios.post('/login', values, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken
                }
            });

            // If login is successful, redirect to home page
            if (response.status === 200) {
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
