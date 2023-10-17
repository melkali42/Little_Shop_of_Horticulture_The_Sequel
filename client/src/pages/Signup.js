import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/clientAuth'; // write client side token authentication logic
import { ADD_USER } from '../utils/mutations'; // write mutation to add user to database

// this logic will create a signup page that will allow users to create an account, will need to create mutation to add user to database

export default function Signup(props) {
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

    return(
        <section>
            <Link to='/login'>← Go to Login</Link>
            <h2>Signup</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    className="form-input"
                    placeholder="Your First Name"
                    name="firstName"
                    type="firstName"
                    id="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="Your Last Name"
                    name="lastName"
                    type="lastName"
                    id="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    placeholder="Your Email"
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
};