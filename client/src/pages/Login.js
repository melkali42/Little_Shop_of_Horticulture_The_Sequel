import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations'; // write mutation to login user
import Auth from '../utils/clientAuth'; // write client side token authentication logic

// this logic will create a login page that will allow users to login to their account, will need to create mutation to login user
export default function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login] = useMutation(LOGIN);

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
        <section>
            <Link to='/signup'>← Go to Signup</Link>
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}