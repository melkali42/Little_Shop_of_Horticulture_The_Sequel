import React from 'react';

function Home() {
return (
    <div>
    <header>
        <div className="carousel">
        <p>Sign Up now with your email for a terrifying website-wide 10% discount!</p>
        </div>
        <nav>
        <ul>
            <li><a href="login.html">LogIn</a></li>
            <li><a href="productList.html">Products</a></li>
            <li><a href="favorites.html">Favorites</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
        </nav>
    </header>
    <main>
        <h1>Welcome to Our Online Store</h1>
        <p>Explore our wide range of products and find great deals!</p>
        <img> ***TO ADD*** </img>
    </main>
    <footer>
        <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
    </footer>
    </div>
);
}

export default Home;
