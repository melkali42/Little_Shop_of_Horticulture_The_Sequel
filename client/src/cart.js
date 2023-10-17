const cart = [];
const favorites = [];

const cartItems = document.querySelector('.cart-items');

// Loop through the product data and create product cards
products.forEach(product => {
    const productCard = document.createElement('li');
    productCard.innerHTML = `
        <img src="${product.image_url}" alt="${product.name}">
        <div class="item-details">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <p>Quantity: 2</p>
        <button class="remove-item" data-product-id="${product.id}">Remove from Cart</button>
        <button class="move-favorite" data-product-id="${product.id}">Add Item to Favorites</button>
        </div>
    `;
    cartItems.appendChild(productCard);
});

// Function to add an item to the cart
function addToCart(productDetails) {
    cart.push(productDetails);
    updateCartUI();
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    updateCartUI();
    }
}

// Function to move an item to favorites
function moveToFavorites(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
    const movedItem = cart.splice(itemIndex, 1)[0];
    favorites.push(movedItem);
    updateCartUI();
    updateFavoritesUI();
    }
}

// Function to update the cart
function updateCartUI() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h2>${item.name}</h2><p>Price: $${item.price}</p>
            <button class="remove-item" data-product-id="${item.id}">Remove from Cart</button>
            <button class="move-favorite" data-product-id="${item.id}">Move Item to Favorites</button>`;
        cartList.appendChild(listItem);
    });
}

// Function to update the favorites 
function updateFavoritesUI() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';

    favorites.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h2>${item.name}</h2><p>Price: $${item.price}</p>`;
        favoritesList.appendChild(listItem);
    });
}

// Handle remove and move actions
document.body.addEventListener('click', event => {
    if (event.target.classList.contains('remove-item')) {
        const productId = event.target.getAttribute('data-product-id');
        removeFromCart(productId);
    } else if (event.target.classList.contains('move-favorite')) {
        const productId = event.target.getAttribute('data-product-id');
        moveToFavorites(productId);
    }
});
