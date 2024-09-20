
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

let cartBtn = document.querySelector('#cart-btn');
let overlayContainer = document.querySelector('#overlay-container');
let cartContainer = document.querySelector('#cart-container');
let closeCartBtn = document.querySelector('#close-cart');
let cartSearchInput = document.querySelector('#cart-search-input');
let cartItems = document.querySelectorAll('.cart-item');

// Show cart container
cartBtn.onclick = () => {
    overlayContainer.classList.add('active');
}

// Close cart container
closeCartBtn.onclick = () => {
    overlayContainer.classList.remove('active');
}

// Search function in cart
cartSearchInput.onkeyup = () => {
    let filter = cartSearchInput.value.toLowerCase();
    cartItems.forEach(item => {
        let itemName = item.getAttribute('data-item-name').toLowerCase();
        if (itemName.includes(filter)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Close when clicking outside the container
overlayContainer.onclick = (e) => {
    if (e.target === overlayContainer) {
        overlayContainer.classList.remove('active');
    }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.onscroll = () => {
    navbar.classList.remove('active');
}