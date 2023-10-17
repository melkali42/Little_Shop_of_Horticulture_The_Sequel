
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
    });

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="flex-column justify-flex-start min-100-vh">
                <Header />
                <div className="container">
                    <Home />
                    <Login />
                    <Signup />
                    <Profile />
                </div>
                <Footer />
            </div>
        </ApolloProvider>
    );
}

export default App;

// dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// components/pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
    uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('user_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

// consider using react-bootstrap for styling pages
export default function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <section>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </section>
            </Router>
        </ApolloProvider>
    )
};

