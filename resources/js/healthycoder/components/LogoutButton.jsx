import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton(props) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        // Send the POST request to logout
        const response = await fetch('/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });

        if (response.ok) {
            // Handle successful logout
            props.onLogout(); // Call a function passed via props to handle state update or redirect
            navigate('/login'); // Redirect to login page
        } else {
            // Handle errors
            console.log('Logout failed');
        }
    }

    return (
        <button onClick={handleLogout} className="btn btn-link">Logout</button>
    );
}
