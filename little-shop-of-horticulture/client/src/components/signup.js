import React from 'react';

function Signup() {
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
            <li><a href="productInfo.html">Products</a></li>
            <li><a href="favorites.html">Favorites</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
        </nav>
    </header>
    <main>
        <div className="flex" style={{ display: "inline-flex" }}>
        <img src="/public/images/logo_png_300ppi.png" alt="Logo" style={{ width: "100px", height: "90px" }} />
        <h1>Sign Up</h1>
        </div>
        <form className="signup-form" action="process-signup.php" method="POST">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required />
        <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="login.html">Log In</a></p>
    </main>
    <footer>
        <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
    </footer>
    </div>
);
}

export default Signup;
