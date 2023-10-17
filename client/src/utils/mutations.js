import { gql } from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
        _id
        firstName
        lastName
        email
        location
        }
    }
}
`;

export const ADD_USER = gql`
mutation signup($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
        token
        user {
        _id
        firstName
        lastName
        email
        location
        }
    }
}
`;

export const ADD_PRODUCT = gql`
mutation addProduct($name: String!, $purchaser: String!) {
    addProduct(name: $name, purchaser: $purchaser) {
        name
        purchaser
    }
}
`;

export const ADD_TIP = gql`
mutation addTip($tip: String!, $tipAuthor: String!) {
    addTip(tip: $tip, tipAuthor: $tipAuthor) {
        tip
        tipAuthor
    }
}
`;

export const ADD_CARETIP = gql`
mutation addCareTip($tip: String!, $tipAuthor: String!) {
    addCareTip(tip: $tip, tipAuthor: $tipAuthor) {
        tip
        tipAuthor
    }
}
`;


