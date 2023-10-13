import React from 'react';

function Login() {
return (
    <div>
    <header>
        <div className="carousel">
        <p>Log In to your account and get ready to explore the terrifying world of plants! Sign Up if you haven't yet and let's get started!</p>
        </div>
        <nav>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="productList.html">Products</a></li>
            <li><a href="favorites.html">Favorites</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
        </nav>
    </header>
    <main>
        <div className="flex" style={{ display: "inline-flex" }}>
        <img src="/public/images/logo_png_300ppi.png" alt="Logo" style={{ width: "100px", height: "90px" }} />
        <h1>Login Page</h1>
        </div>
        <form>
        <form className="login-form" action="process-login.php" method="POST">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="signup.html">Sign Up</a></p>
        </form>
    </main>
    <footer>
        <p>&copy; 2023 Company Name. All rights reserved.</p>
    </footer>
    </div>
);
}

export default Login;
