

const mainImg = document.getElementById('bigImg');
const thumbnails = document.querySelectorAll('.thumbnail'); // Assuming you use a class for all thumbnails

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        thumbnails.forEach(t => t.classList.remove('activeitem')); // Remove active class from all
        thumb.classList.add('activeitem'); // Add active class to the clicked one
        mainImg.setAttribute('src', `images/image-product-${index + 1}.jpg`); // Dynamically set the image
    });
});


// const thumbOne = document.getElementById('itemone');
// const thumbTwo = document.getElementById('itemtwo');
// const thumbThree = document.getElementById('itemthree');
// const thumbFour = document.getElementById('itemfour');

// thumbOne.addEventListener('click', ()=>{

//     thumbOne.classList.add('activeitem');
//     thumbTwo.classList.remove('activeitem');
//     thumbThree.classList.remove('activeitem');
//     thumbFour.classList.remove('activeitem');
//     mainImg.setAttribute('src', 'images/image-product-1.jpg')
// })
// thumbTwo.addEventListener('click', ()=>{
//     thumbOne.classList.remove('activeitem');
//     thumbTwo.classList.add('activeitem');
//     thumbThree.classList.remove('activeitem');
//     thumbFour.classList.remove('activeitem');
//     mainImg.setAttribute('src', 'images/image-product-2.jpg')

// })
// thumbThree.addEventListener('click', ()=>{
//     thumbOne.classList.remove('activeitem');
//     thumbTwo.classList.remove('activeitem');
//     thumbThree.classList.add('activeitem');
//     thumbFour.classList.remove('activeitem');
//     mainImg.setAttribute('src', 'images/image-product-3.jpg')

// })
// thumbFour.addEventListener('click', ()=>{
//     thumbOne.classList.remove('activeitem');
//     thumbTwo.classList.remove('activeitem');
//     thumbThree.classList.remove('activeitem');
//     thumbFour.classList.add('activeitem');
//     mainImg.setAttribute('src', 'images/image-product-4.jpg')

// })





// --------------------------------add to num---------------------

const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const amt = document.getElementById('amount');
const addToCart = document.getElementById('cartBtn');
const itemNumber = document.getElementById('number');
const emptyText = document.getElementById('empty-text');
const cartItem = document.getElementById('cart-item');
const calcPrice = document.getElementById('price-calc');
const priceResult = document.getElementById('calc-result');

let num = Number(amt.textContent); // Ensure num is a number

minus.addEventListener('click', () => {
    if (num > 0) {
        num--;
        updateCart();
    }
});

plus.addEventListener('click', () => {
    num++;
    updateCart();
});

// Function to update the cart display
const updateCart = () => {
    amt.textContent = num;
    itemNumber.textContent = num;
    calcPrice.textContent = `$125.00 x ${num}`;
    priceResult.textContent = `$${(125.00 * num).toFixed(2)}`; // Ensure proper decimal formatting
};

// let num = amt.textContent


// minus.addEventListener('click', ()=>{
//     if(num > 0){
//         num --;
//         amt.textContent = num
//         itemNumber.textContent = num;
//         calcPrice.textContent = `$125.00 x ${num}`
//         priceResult.textContent = `$${125.00*num}`
//     }
// })

// plus.addEventListener('click', ()=>{
//     num ++;
//     amt.textContent = num
//     itemNumber.textContent = num;
//     calcPrice.textContent = `$125.00 x ${num}`
//     priceResult.textContent = `$${125.00*num}.00`
// })

// add to cart main 


addToCart.addEventListener('click', () => {
    if (num > 0) {
        itemNumber.style.display = 'flex'; // Show the item number badge
        emptyText.style.display = 'none';
        cartItem.style.display = 'flex';
    }
});



//---------------------------hover-----------------show cart 

const cartIcon = document.getElementById('cart-icon');
const cartContainer = document.getElementById('cart-container');

let isCartOpen = false; // State to track if the cart is permanently open

// Hover functionality
cartIcon.addEventListener('mouseenter', () => {
    if (!isCartOpen) {
        cartContainer.style.display = 'block';
    }
});

cartIcon.addEventListener('mouseleave', () => {
    if (!isCartOpen) {
        cartContainer.style.display = 'none';
    }
});

// Toggle open/close functionality
cartIcon.addEventListener('click', () => {
    isCartOpen = !isCartOpen; // Toggle the state
    if (isCartOpen) {
        cartContainer.style.display = 'block'; // Keep the cart open

    } else {
        cartContainer.style.display = 'none'; // Close the cart
    }
});

// Ensure the cart remains visible when hovered directly (if needed)
cartContainer.addEventListener('mouseenter', () => {
    if (!isCartOpen) {
        cartContainer.style.display = 'block';
    }
});

cartContainer.addEventListener('mouseleave', () => {
    if (!isCartOpen) {
        cartContainer.style.display = 'none';
    }
});


const clearCart = document.getElementById('clear-cart')

clearCart.addEventListener('click', ()=>{
    cartItem.style.display = 'none';
    emptyText.style.display = 'block';
    itemNumber.style.display = 'none';
    amt.textContent = 0
});