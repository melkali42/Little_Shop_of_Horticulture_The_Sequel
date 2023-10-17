import { gql } from '@apollo/client';

// will need to add mutations to add user to database and login user, more mutations will be needed for products & cart

export const ADD_USER = gql`
    mutation signUp($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
        signUp(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
            user {
                _id
                email
                firstName
                lastName
                password
            }
        }
    }
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;