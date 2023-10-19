import React from 'react';
import mainLogo from "../images/logo_png_300ppi.png"

function Favorites() {
return (
    <div>
    <header>
        <div className="carousel">
        <p>Sign Up now with your email for a terrifying website-wide 10% discount!</p>
        </div>
        {/*<nav>
        <ul>
            <li><a href="productList">Products</a></li>
            <li><a href="cart">Cart</a></li>
            <li><a href="about">About</a></li>
        </ul>
        </nav>*/}
    </header>
    <main>
        <div className="flex" style={{ display: "inline-flex" }}>
        <img src={mainLogo} alt="Logo" style={{ width: "100px", height: "90px" }} />
        <h1>Your Favorite Items</h1>
        </div>
        <ul class="favorite-items" style={{listStyle: "none"}}>

            <li>
                <img src="https://www.gardendesign.com/pictures/images/900x705Max/site_3/snsevieria-trifasciata-laurentii-houseplant-green-leaves-shutterstock-com_14449.jpg" alt="Product 1"></img>
                <h3>Spider Plant</h3>
                <p>Price: $14.99</p>
                <button class="remove-favorite">Remove from Favorites</button>
            </li>
    </ul>
    </main>
    <footer>
        <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
    </footer>
    </div>
);
}

export default Favorites;
