import React from 'react';

function Cart() {
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
        <ul class="cart-items">
            <li>
                <img src="product1.jpg" alt="Product 1"></img>
                <div class="item-details">
                    <h2>Product 1</h2>
                    <p>Price: $99.99</p>
                    <p>Quantity: 2</p>

                    <button class="remove-item">Remove from Cart</button>
                    <button class="move-favorite">Move Item to Favorites</button>
                </div>
            </li>
            <li>
            </li>
        </ul>

        <div class="cart-total">
            <h3>Total: $199.98</h3>

            <button class="checkout">Checkout</button>
        </div>
    </main>
    <footer>
        <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
    </footer>
    </div>
);
}

export default Cart;
