import { gql } from '@apollo/client';

// will need to add mutations to add user to database and login user, more mutations will be needed for products & cart

export const ADD_USER = gql`
    mutation addUser($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
        addUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
            token
            user {
                _id
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