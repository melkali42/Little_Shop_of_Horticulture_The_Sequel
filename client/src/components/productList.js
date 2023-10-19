import { React, useState, useEffect } from 'react';
import mainLogo from "../images/logo_png_300ppi.png"

// render products from productRoutes response
function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products')
            .then(res => res.json())
            .then(res => setProducts(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
        <header>
            <div className="carousel">
            <p>Sign Up now with your email for a terrifying website-wide 10% discount!</p>
            </div>
            {/*<nav>
            <ul>
                <li><a href="favorites">Favorites</a></li>
                <li><a href="cart">Cart</a></li>
                <li><a href="about">About</a></li>
            </ul>
            </nav>*/}
        </header>
        <main>
            <div className="flex" style={{ display: "inline-flex" }}>
            <img src={mainLogo} alt="Logo" style={{ width: "100px", height: "90px" }} />
            </div>
            <ul className="product-list">
            <h1>Plant Store - Products</h1>
            <ul id="plantList">
                {/*map products into an array to display on page */}
                {products.map((product, index) => (
                    <li key={index}>
                        <p>{product.description} - <strong>${product.price}</strong></p>
                        <img src={product.image_url} alt="product" style={{ width: "150px", height: "140px" }} />
                        <button style={{display: "block"}}>Add to Cart</button>
                    </li>
                    
                ))}
            </ul>
            </ul>
        </main>
        <footer>
            <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
        </footer>
        </div>
    );
}

export default ProductList;
