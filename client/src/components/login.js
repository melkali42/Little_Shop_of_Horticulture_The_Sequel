import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations'; // write mutation to login user
import Auth from '../utils/clientAuth'; // write client side token authentication logic

// this logic will create a login page that will allow users to login to their account, will need to create mutation to login user
function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login] = useMutation(LOGIN_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: {
                    email: formState.email,
                    password: formState.password,
                },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (error) {
            console.error(error);
        }
    };

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
        <p>Log In to your account and get ready to explore the terrifying world of plants! Sign Up if you haven't yet and let's get started!</p>
        </div>
        {/*<nav>
        <ul>
            <li><a href="productList">Products</a></li>
            <li><a href="favorites">Favorites</a></li>
            <li><a href="cart">Cart</a></li>
            <li><a href="about">About</a></li>
        </ul>
    </nav>*/}
    </header>
    <main>
        <div className="flex" style={{ display: "inline-flex" }}>
        <img src="/public/images/logo_png_300ppi.png" alt="Logo" style={{ width: "100px", height: "90px" }} />
        <h1>Login Page</h1>
        </div>
        <div>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={formState.email}
            onChange={handleChange} required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="******" value={formState.password} onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to='/signup'>Go to Signup</Link></p>
        </div>
    </main>
    <footer>
        <p>&copy; 2023 Company Name. All rights reserved.</p>
    </footer>
    </div>
);
}

export default Login;
