import './App.css';
import Cart from './components/cart';
import Favorites from './components/favorites';
import Home from './components/home';
import Login from './components/login';
import ProductInfo from './components/productInfo';
import ProductList from './components/productList';
import Signup from './components/signup';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
