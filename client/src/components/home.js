import React from 'react';
import homeLogo from "../images/logo_BG_final.png"

export function Home() {
return (
    <div>
    <header>
        <div className="carousel">
        <p>Sign Up now with your email for a terrifying website-wide 10% discount!</p>
        </div>
        <nav>
        <ul>
            <li><a href="productList">Products</a></li>
            <li><a href="favorites">Favorites</a></li>
            <li><a href="cart">Cart</a></li>
            <li><a href="about">About</a></li>
        </ul>
        </nav>
    </header>
    <main>
        <h1>Welcome to Our Online Store</h1>
        <p>Explore our wide range of products and find great deals!</p>
        <img src={homeLogo}  alt="logo" style= {{ width: "100%", height: "auto" }} />
    </main>
    <footer>
        <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
    </footer>
    </div>
);
}

export default Home;
