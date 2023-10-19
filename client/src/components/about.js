import React from 'react';
import mainLogo from "../images/logo_png_300ppi.png"
import gif from "../images/gif.mp4"

export function About() {
return (
    <div>
    <header>
        <div className="carousel">
        <p>Sign Up now with your email for a terrifying website wide 10% discount!</p>
        </div>
        {/*<nav>
        <ul>
            <li><a href="productList">Products</a></li>
            <li><a href="favorites">Favorites</a></li>
            <li><a href="cart">Cart</a></li>
        </ul>
        </nav>*/}
    </header>
    <main>
        <div className="flex" style={{ display: "inline-flex" }}>
        <div>
        <img src={mainLogo} alt="Logo" style={{ width: "100px", height: "90px" }} />
        </div>
        <h1>About Us</h1>
        </div>

        <p>Welcome to our sinister world of flora, where the line between beauty and terror blurs beneath the moonlit sky. At our eerie plant emporium, we specialize in delivering an experience that combines the alluring mystique of the supernatural with the enchanting allure of plants.</p>

        <p>Step into our virtual nursery, where rare and peculiar plant specimens await your discovery. From carnivorous flora with insatiable appetites to delicate blossoms that thrive in the shadows, our collection is a celebration of nature's dark and enigmatic side.</p>
            
        <p>Uncover the legends and lore behind each plant as you navigate our macabre garden. Explore the chilling stories of midnight-blooming petals that are said to attract spirits and the serpentine tendrils that weave tales of ancient curses.</p>
            
        <p>Embrace your curiosity as you plunge into the depths of our horticultural secrets. Our guides will lead you through the shadows, offering insights into how to care for these bewitching botanicals, as well as the mystical practices that some believe are tied to their cultivation.</p>
            
        <p>Our aim is not only to provide you with exceptional and uncommon plants but to offer an immersive experience that captures the essence of spine-tingling tales. As you browse, you'll find the echoes of horror woven into every leaf and petal.</p>
            
        <p>Prepare to be transported to a realm where darkness and growth intertwine. We pledge to bring you not just plants, but artifacts of otherworldly beauty, thriving on the fringes of the unknown. Our mission is to deliver a captivating experience that goes beyond the ordinary.</p>
            
        <p>Dare you embark on this journey into the realm of the mysterious and macabre? Welcome to the enigma of our cursed garden, where nature's secrets and horror's allure entwine. Now... Shall we?</p>

        <img src={gif} alt="gif" style={{ width: "100px", height: "auto"}} />

    </main>
    
    <footer>
        <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
    </footer>
    </div>
);
}

export default About;
