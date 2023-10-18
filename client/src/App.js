// dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// components/pages
// import Login from './pages/Login';
//import Signup from './pages/Signup';
//import Home from './pages/Home';
//import Nav from './components/Nav'
//import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login';
import About from './components/about';
import Home from './components/home';
import Nav from './components/Nav';
import Signup from './components/signup';
import ProductList from './components/productList';
import Favorites from './components/favorites';
import Cart from './components/cart';
import Products from './components/productInfo';


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
                        <Route path="/about" element= {<About />} />
                        <Route path="/productList" element= {<ProductList />} />
                        <Route path="/productInfo" element= {<Products />} />
                        <Route path="/favorites" element= {<Favorites />} />
                        <Route path="/cart" element= {<Cart />} />
                    </Routes>
                </section>
            </Router>
        </ApolloProvider>
    )
};

