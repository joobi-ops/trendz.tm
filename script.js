document.addEventListener('DOMContentLoaded', function() {
    // Load products
    loadProducts();

    // Toggle cart sidebar
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');

    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        toggleCart();
    });

    closeCart.addEventListener('click', function() {
        toggleCart();
    });

    cartOverlay.addEventListener('click', function() {
        toggleCart();
    });

    function toggleCart() {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
        document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // In a real implementation, you'd send this to a server
            alert(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`);
            this.reset();
        });
    }

    // Category buttons click
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            
            // Filter products by category
            filterProductsByCategory(category);
            
            // Scroll to products section
            document.getElementById('trending').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize cart from localStorage if available
    initCart();
});

// Product filtering
function filterProductsByCategory(category) {
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = '';
    
    const filteredProducts = products.filter(product => 
        product.category === category || category === 'all'
    );
    
    if (filteredProducts.length === 0) {
        productContainer.innerHTML = '<p class="no-products">No products found in this category yet. Check back soon!</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        productContainer.appendChild(createProductCard(product));
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Add sale tag if on sale
    if (product.onSale) {
        const tag = document.createElement('div');
        tag.className = 'product-tag';
        tag.textContent = 'SALE';
        card.appendChild(tag);
    }
    
    // Product image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'product-image';
    
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    imageContainer.appendChild(image);
    
    // Quick action buttons
    const actions = document.createElement('div');
    actions.className = 'product-actions';
    
    const wishlistBtn = document.createElement('button');
    wishlistBtn.innerHTML = '<i class="far fa-heart"></i>';
    wishlistBtn.title = 'Add to Wishlist';
    actions.appendChild(wishlistBtn);
    
    const quickviewBtn = document.createElement('button');
    quickviewBtn.innerHTML = '<i class="far fa-eye"></i>';
    quickviewBtn.title = 'Quick View';
    actions.appendChild(quickviewBtn);
    
    imageContainer.appendChild(actions);
    card.appendChild(imageContainer);
    
    // Product info
    const info = document.createElement('div');
    info.className = 'product-info';
    
    const name = document.createElement('h3');
    name.textContent = product.name;
    info.appendChild(name);
    
    const category = document.createElement('div');
    category.className = 'category';
    category.textContent = capitalizeFirstLetter(product.category);
    info.appendChild(category);
    
    // Price row with price and add to cart button
    const priceRow = document.createElement('div');
    priceRow.className = 'price-row';
    
    const price = document.createElement('div');
    price.className = 'product-price';
    
    if (product.oldPrice) {
        const oldPrice = document.createElement('span');
        oldPrice.className = 'old-price';
        oldPrice.textContent = `$${product.oldPrice.toFixed(2)}`;
        price.appendChild(oldPrice);
    }
    
    price.appendChild(document.createTextNode(`$${product.price.toFixed(2)}`));
    priceRow.appendChild(price);
    
    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'add-to-cart';
    addToCartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    addToCartBtn.setAttribute('data-id', product.id);
    addToCartBtn.addEventListener('click', function() {
        addToCart(product);
    });
    
    priceRow.appendChild(addToCartBtn);
    info.appendChild(priceRow);
    
    card.appendChild(info);
    
    return card;
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Load products into the trending section
function loadProducts() {
    const productContainer = document.querySelector('.product-container');
    
    // Clear container first
    productContainer.innerHTML = '';
    
    // Display first 8 products
    const productsToShow = products.slice(0, 8);
    
    productsToShow.forEach(product => {
        productContainer.appendChild(createProductCard(product));
    });
}

// Cart functionality
let cart = [];

function initCart() {
    // Try to load cart from localStorage
    const savedCart = localStorage.getItem('tmtrendz-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

function saveCart() {
    localStorage.setItem('tmtrendz-cart', JSON.stringify(cart));
}

function addToCart(product) {
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Update cart display
    updateCartDisplay();
    saveCart();
    
    // Show cart
    document.querySelector('.cart-sidebar').classList.add('active');
    document.querySelector('.cart-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Show success message
    showAddedToCartMessage(product.name);
}

function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCountElement = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total-price');
    
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    
    // Clear cart items container
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotalElement.textContent = '$0.00';
        return;
    }
    
    // Add items to cart
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        // Item image
        const itemImg = document.createElement('div');
        itemImg.className = 'cart-item-img';
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        itemImg.appendChild(img);
        cartItem.appendChild(itemImg);
        
        // Item details
        const itemDetails = document.createElement('div');
        itemDetails.className = 'cart-item-details';
        
        const itemTitle = document.createElement('div');
        itemTitle.className = 'cart-item-title';
        itemTitle.textContent = item.name;
        itemDetails.appendChild(itemTitle);
        
        const itemPrice = document.createElement('div');
        itemPrice.className = 'cart-item-price';
        itemPrice.textContent = `$${item.price.toFixed(2)}`;
        itemDetails.appendChild(itemPrice);
        
        // Quantity controls
        const quantityControl = document.createElement('div');
        quantityControl.className = 'cart-item-quantity';
        
        const decreaseBtn = document.createElement('button');
        decreaseBtn.className = 'quantity-btn';
        decreaseBtn.innerHTML = '<i class="fas fa-minus"></i>';
        decreaseBtn.addEventListener('click', function() {
            updateItemQuantity(item.id, item.quantity - 1);
        });
        quantityControl.appendChild(decreaseBtn);
        
        const quantityValue = document.createElement('span');
        quantityValue.className = 'quantity-value';
        quantityValue.textContent = item.quantity;
        quantityControl.appendChild(quantityValue);
        
        const increaseBtn = document.createElement('button');
        increaseBtn.className = 'quantity-btn';
        increaseBtn.innerHTML = '<i class="fas fa-plus"></i>';
        increaseBtn.addEventListener('click', function() {
            updateItemQuantity(item.id, item.quantity + 1);
        });
        quantityControl.appendChild(increaseBtn);
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-item';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            removeFromCart(item.id);
        });
        quantityControl.appendChild(removeBtn);
        
        itemDetails.appendChild(quantityControl);
        cartItem.appendChild(itemDetails);
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Update total price
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartTotalElement.textContent = `$${totalPrice.toFixed(2)}`;
}

function updateItemQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        updateCartDisplay();
        saveCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCart();
}

function showAddedToCartMessage(productName) {
    const message = document.createElement('div');
    message.className = 'add-to-cart-message';
    message.textContent = `${productName} added to cart!`;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 2000);
}

// Checkout button event
document.querySelector('.checkout-btn').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add some products first!');
        return;
    }
    
    // In a real implementation, this would redirect to a checkout page
    alert('This would proceed to checkout in a real implementation.');
});

// Handle page navigation smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});