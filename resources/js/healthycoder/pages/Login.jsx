import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
export default function Login(props) {
 
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
 
    const handleSubmit = async (event) => {
 
        event.preventDefault();
 
        // make the AJAX request
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
 
        // parse the response as JSON
        const response_data = await response.json();
 
        // if the response code is not 2xx (success)
        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    // handle validation errors here
                    console.log('VALIDATION FAILED:', response_data.errors);
                    break;
                default:
                    console.log('UNKNOWN ERROR', response_data);
                    break;
            }
        }
 
        // // with axios
        // try {
        //     // make the AJAX request
        //     const response = await axios.post('/login', values);
        //     // get the (already JSON-parsed) response data
        //     const response_data = response.data;
        // } catch (error) {
        //     // if the response code is not 2xx (success)
        //     switch (error.response.status) {
        //         case 422:
        //             // handle validation errors here
        //             console.log('VALIDATION FAILED:', error.response.data.errors);
        //             break;
        //         case 500:
        //             console.log('UNKNOWN ERROR', error.response.data);
        //             break;
        //     }
        // }
    }
 
    const handleChange = (event) => {
        setValues(previous_values => {
            return ({...previous_values, 
                [event.target.name]: event.target.value
            });
        });
    }
 
    return (
        <form action="/login" method="post" onSubmit={ handleSubmit }>
 
            <input type="email" name="email" value={ values.email } onChange={ handleChange } />
 
            <input type="password" name="password" value={ values.password } onChange={ handleChange } />
 
            <button>Login</button>
 
        </form>
    );
}