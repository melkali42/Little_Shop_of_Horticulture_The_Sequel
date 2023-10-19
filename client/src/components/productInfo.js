import React, { useState, useEffect } from 'react';
import mainLogo from "../images/logo_png_300ppi.png"

// added useState and useEffect to get products from database
function ProductInfo({ name, price }) {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products')
            .then(res => res.json())
            .then(res => setProducts(res))
            .catch(err => console.log(err));
    }, []);

    const handleAddToCart = () => {
        const productDetails = {
            name: name,
            price: price,
        };

    setCart([...cart, productDetails]);
    };

    return (
        <div>
        <header>
            <div className="carousel">
            <p>Sign Up now with your email for a terrifying website-wide 10% discount!</p>
            </div>
            {/*<nav>
            <ul>
                <li><a href="productList">Products</a></li>
                <li><a href="favorites">Favorites</a></li>
                <li><a href="cart">Cart</a></li>
                <li><a href="about">About</a></li>
            </ul>
            </nav>*/}
        </header>
        <main>
            <div className="flex" style={{ display: "inline-flex" }}>
            <img src={mainLogo} alt="Logo" style={{ width: "100px", height: "90px" }} />
            <h1>Product Details</h1>
            </div>
            {products.map((product, index) => (
                <div key={index}>
                    <h2 id="product-name">{product.name}</h2>
                    <img id="product-image" src={product.image_url} alt="Product Image" style={{ maxWidth: "300px" }} />
                    <p id="product-description">Description: {product.description}</p>
                    <p id="product-tip"></p>
                    <p id="product-difficulty">Difficulty: {product.difficulty}</p>
                    <p id="product-price">Price: ${product.price}</p>
                    <button className="add-favorite">Add to Favorites</button>
                    <button className="add-to-cart" onClick={handleAddToCart}>
                    Add to Cart
                    </button>
                </div> 
            ))}
            
    
        </main>
        <footer>
            <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
        </footer>
        </div>
    );
    }

export default ProductInfo;
