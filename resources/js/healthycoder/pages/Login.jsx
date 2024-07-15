import React, { useState } from 'react';
import axios from 'axios';

export default function Login(props) {

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

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

        // Make the AJAX request
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            }
        });

        // Parse the response as JSON
        const response_data = await response.json();

        // If the response code is not 2xx (success)
        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    // Handle validation errors here
                    console.log('VALIDATION FAILED:', response_data.errors);
                    break;
                default:
                    console.log('UNKNOWN ERROR', response_data);
                    break;
            }
        }
    };

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({ ...previous_values, [event.target.name]: event.target.value });
        });
    };

    return (
        <form action="/login" method="post" onSubmit={handleSubmit}>
            <input type="email" name="email" value={values.email} onChange={handleChange} />
            <input type="password" name="password" value={values.password} onChange={handleChange} />
            <button>Login</button>
        </form>
    );
}
