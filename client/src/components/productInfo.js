<<<<<<< HEAD
import React, { useState } from 'react';

function ProductInfo({ name, price }) {
    const [cart, setCart] = useState([]);

    const handleAddToCart = () => {
        const productDetails = {
            name: name,
            price: price,
        };

    setCart([...cart, productDetails]);
    };
=======
import React from 'react';
import mainLogo from "../images/logo_png_300ppi.png"
>>>>>>> develop

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
        <div className="flex" style={{ display: "inline-flex" }}>
        <img src={mainLogo} alt="Logo" style={{ width: "100px", height: "90px" }} />
        <h1>Product Details</h1>
        </div>
        <h2 id="product-name">Product Name</h2>
        <img id="product-image" src="" alt="Product Image" style={{ maxWidth: "300px" }} />
        <p id="product-description">Description: </p>
        <p id="product-tip"></p>
        <p id="product-difficulty">Difficulty: </p>
        <p id="product-price">Price: </p>
        <button className="add-favorite">Add to Favorites</button>
        <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
        </button>

    </main>
    <footer>
        <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
    </footer>
    </div>
);
}

export default ProductInfo;
