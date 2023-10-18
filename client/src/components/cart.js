import React, { useState } from 'react';

function Cart() {
    const [cart, setCart] = useState([]);

    function updateCartUI() {
        return (
            <div>
                <h2>Cart Contents:</h2>
                <ul>
                    {cart.map((product, index) => (
                        <li key={index}>
                            {product.name} - ${product.price} - Quantity: {product.quantity}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    function handleAddToCart(productToAdd) {
        const existingProductIndex = cart.findIndex(
            (product) => product.name === productToAdd.name
        );

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity++;
            setCart(updatedCart);
        } else {
            const updatedCart = [...cart, { ...productToAdd, quantity: 1 }];
            setCart(updatedCart);
        }
    }

    return (
        <div>
            <header>
                <div className="carousel">
                    <p>Sign Up now with your email for a terrifying website-wide 10% discount!</p>
                </div>
                <nav>
                    <ul>
                        <li><a href="login.html">LogIn</a></li>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="productList.html">Products</a></li>
                        <li><a href="favorites.html">Favorites</a></li>
                        <li><a href="about.html">About</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="flex" style={{ display: "inline-flex" }}>
                    <img src="/public/images/logo_png_300ppi.png" alt="Logo" style={{ width: "100px", height: "90px" }} />
                    <h1>Your Shopping Cart</h1>
                </div>
                <ul className="cart-items">
                    {cart.map((product, index) => (
                        <li key={index}>
                            {product.name} - ${product.price} - Quantity: {product.quantity}
                        </li>
                    ))}
                </ul>
                <button className="add-to-cart" onClick={() => handleAddToCart(productDetails)}>
                    Add to Cart
                </button>
                <div className="cart-total">
                    <h3>Total: ${calculateTotalPrice(cart)}</h3>
                    <button className="checkout">Checkout</button>
                </div>
            </main>
            <footer>
                <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
            </footer>
            {updateCartUI()}
        </div>
    );
}

export default Cart;