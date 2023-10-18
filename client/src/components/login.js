import React from 'react';
import mainLogo from "../images/logo_png_300ppi.png"

function Login() {
return (
    <div>
    <header>
        <div className="carousel">
        <p>Log In to your account and get ready to explore the terrifying world of plants! Sign Up if you haven't yet and let's get started!</p>
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
        <h1>Login Page</h1>
        </div>
        <div>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={formState.email}
            onChange={handleChange} required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="******" value={formState.password} onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to='/signup'>Go to Signup</Link></p>
        </div>
    </main>
    <footer>
        <p>&copy; 2023 Company Name. All rights reserved.</p>
    </footer>
    </div>
);
}

export default Login;
