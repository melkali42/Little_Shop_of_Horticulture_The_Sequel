import { React, useState } from 'react';
import mainLogo from "../images/logo_png_300ppi.png"
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/clientAuth'; // write client side token authentication logic
import { ADD_USER } from '../utils/mutations'; // write mutation to add user to database

// this logic should create a new user and log them in
function Signup(props) {
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const [addUser] = useMutation(ADD_USER); 

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        const token = mutationResponse.data.signUp.token;
        Auth.login(token);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

return (
    <div>
    <header>
        <div className="carousel">
        <p>Sign Up now with your email for a terrifying website-wide 10% discount!</p>
        </div>
        {/*<nav>
        <ul>
            <li><a href="productInfo">Products</a></li>
            <li><a href="favorites">Favorites</a></li>
            <li><a href="cart">Cart</a></li>
            <li><a href="about">About</a></li>
        </ul>
    </nav>*/}
    </header>
    <main>
        <div className="flex" style={{ display: "inline-flex" }}>
        <img src={mainLogo} alt="Logo" style={{ width: "100px", height: "90px" }} />
        <h1>Sign Up</h1>
        </div>
        <form className="signup-form" onSubmit={handleFormSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" placeholder="Your First Name" value={formState.firstName} onChange={handleChange} required />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Your Last Name" value={formState.lastName} onChange={handleChange} required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder='Email' value={formState.email} onChange={handleChange} required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder='Choose a password (min. 8 characters)' value={formState.password} onChange={handleChange} required />
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to='/login'>Log In</Link></p>
    </main>
    <footer>
        <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
    </footer>
    </div>
);
}

export default Signup;
