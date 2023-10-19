import { React, useState, useEffect } from 'react';
import mainLogo from "../images/logo_png_300ppi.png";
// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Auth from '../utils/clientAuth'

// render products from productRoutes response
// add conditional rendering for logged in user
function ProductList() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products')
            .then(res => res.json())
            .then(res => setProducts(res))
            .catch(err => console.log(err));
    }, []);
    if (Auth.loggedIn()) {
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
                {/*<ul className="product-list">*/}
                <h1>Plant Store - Products</h1>
                {/*<Container>*/}
                    <Row id="plantList" >
                        {/*map products into an array to display on page */}
                        {products.map((product, index) => (
                            <Col key={index} md={4}>
                                <Card style={{ width: '18rem', backgroundColor: '#8080804d', gap: '20px', margin: '2rem', boxShadow: '0 2px 4px #0000001a'}}>
                                    <Card.Header style={{ color: '#c39dee' }}>{product.name}</Card.Header>
                                    <Card.Subtitle><strong>${product.price}</strong></Card.Subtitle>
                                    <Card.Img variant="top" src={product.image_url} alt="product" style={{ width: "287px", height: "180px" }} />
                                    {/*<Card.Body style={{ color: '#c39dee' }}>{product.description}</Card.Body>*/}
                                    <Card.Footer>
                                        <Button>Add to Favorites</Button>
                                        <br/>
                                        <Button>Add to Cart</Button>
                                    </Card.Footer>
                                </Card>
                                <br />
                                {/*<p>{product.description} - <strong>${product.price}</strong></p>
                                <img src={product.image_url} alt="product" style={{ width: "150px", height: "140px" }} />
                                <div>
                                    <button style={{display: "inline-block", padding: "10px", margin: "10px"}}>Add to Favorites</button>
                                    <button style={{display: "inline-block", padding: "10px", margin: "10px"}}>Add to Cart</button>
                            </div>*/}
                            </Col>
                            
                        ))}
                    </Row>
                {/*</Container>*/}
                
                {/*</ul>*/}
            </main>
            <footer>
                <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
            </footer>
            </div>
        );
    } else {
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
                {/*<ul className="product-list">*/}
                <h1>Plant Store - Products</h1>
                {/*<Container>*/}
                    <Row id="plantList" >
                        {/*map products into an array to display on page */}
                        {products.map((product, index) => (
                            <Col key={index}>
                                <Card style={{ width: '18rem', backgroundColor: '#8080804d', gap: '20px', margin: '2rem', boxShadow: '0 2px 4px #0000001a'}}>
                                    <Card.Header style={{ color: '#c39dee' }}>{product.name}</Card.Header>
                                    <Card.Subtitle><strong>${product.price}</strong></Card.Subtitle>
                                    <Card.Img variant="top" src={product.image_url} alt="product" style={{ width: "287px", height: "180px" }} />
                                    <Card.Body style={{ color: '#c39dee' }}>{product.description}</Card.Body>
                                    <Card.Footer>
                                        <Card.Text>Log in or sign up to purchase!</Card.Text>
                                    </Card.Footer>
                                </Card>
                                <br />
                                {/*<p>{product.description} - <strong>${product.price}</strong></p>
                                <img src={product.image_url} alt="product" style={{ width: "150px", height: "140px" }} />
                                <div>
                                    <button style={{display: "inline-block", padding: "10px", margin: "10px"}}>Add to Favorites</button>
                                    <button style={{display: "inline-block", padding: "10px", margin: "10px"}}>Add to Cart</button>
                            </div>*/}
                            </Col>
                            
                        ))}
                    </Row>
                {/*</Container>*/}
                
                {/*</ul>*/}
            </main>
            <footer>
                <p>&copy; 2023 Little Shop of Horticulture. All rights reserved.</p>
            </footer>
            </div>
        );
    }
    
}

export default ProductList;
