import React from 'react';
import Auth from '../utils/clientAuth';

// placeholder home page
// if user is logged in, display welcome message
export default function Home() {
    if (Auth.loggedIn()) {
        return(
            <div>
                <h1>Home Page</h1>
                <h2>Welcome {Auth.getProfile().data.firstName}</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Home Page</h1>
                
            </div>
        )
    }
    
}