import React from 'react';

function ProductList() {
return (
    <div>
    <header>
        <div className="carousel">
        <p>Sign Up now with your email for a terrifying website-wide 10% discount!</p>
        </div>
        <nav>
        <ul>
            <li><a href="favorites">Favorites</a></li>
            <li><a href="cart">Cart</a></li>
            <li><a href="about">About</a></li>
        </ul>
        </nav>
    </header>
    <main>
        <div className="flex" style={{ display: "inline-flex" }}>
        <img src="/public/images/logo_png_300ppi.png" alt="Logo" style={{ width: "100px", height: "90px" }} />
        </div>
        <ul className="product-list">
        <h1>Plant Store - Products</h1>
        <ul id="plantList"></ul>
        </ul>
    </main>
    <footer>
        <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
    </footer>
    </div>
);
}

export default ProductList;
