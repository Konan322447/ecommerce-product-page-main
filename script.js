

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

clearCart.addEventListener('click', () => {
    cartItem.style.display = 'none';
    emptyText.style.display = 'block';
    itemNumber.style.display = 'none';
    amt.textContent = 0
});

// ----------------------------light-box-------------------------

const lightBoxMain = document.getElementById('bigImg2');
const lightboxContainer = document.getElementById('lightbox')
const lightBoxThumb = document.querySelectorAll('.thumbnail2'); // Assuming you use a class for all thumbnails

lightBoxThumb.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        lightBoxThumb.forEach(t => t.classList.remove('activethumb')); // Remove active class from all
        thumb.classList.add('activethumb'); // Add active class to the clicked one
        lightBoxMain.setAttribute('src', `images/image-product-${index + 1}.jpg`); // Dynamically set the image
    });
});


const closeLightBox = document.getElementById('close-lightbox');
const nextImg = document.getElementById('next');
const prevImg = document.getElementById('previous');
const mainLightBoxImg = document.getElementById('bigImg2'); // Assuming this is the main image element


// open and close lightbox  

mainImg.addEventListener('dblclick', () => {
    if (window.innerWidth > 767) {
        lightboxContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
});

closeLightBox.addEventListener('click', () => {
    if (window.innerWidth > 767) {
        lightboxContainer.style.display = 'none';
        document.body.style.overflow = 'auto'        
    }
})


let currentIndex = 1; // Track the current image index
const totalImages = lightBoxThumb.length; // Total number of thumbnails

// Function to update the main image and active thumbnail
const updateImageAndThumbnail = (index) => {
    mainLightBoxImg.setAttribute('src', `images/image-product-${index}.jpg`);

    // Remove the `activethumb` class from all thumbnails
    lightBoxThumb.forEach((thumb) => thumb.classList.remove('activethumb'));

    // Add the `activethumb` class to the current thumbnail
    lightBoxThumb[index - 1].classList.add('activethumb'); // Index adjustment (array is 0-based)
};

// Next Button Functionality
nextImg.addEventListener('click', () => {
    currentIndex = currentIndex < totalImages ? currentIndex + 1 : 1; // Loop back to the first image
    updateImageAndThumbnail(currentIndex);
});

// Previous Button Functionality
prevImg.addEventListener('click', () => {
    currentIndex = currentIndex > 1 ? currentIndex - 1 : totalImages; // Loop back to the last image
    updateImageAndThumbnail(currentIndex);
});

// Initialize the first thumbnail as active
updateImageAndThumbnail(currentIndex);


// mobile view 

const mobileNext = document.getElementById('mobile-next');
const mobilePrev = document.getElementById('mobile-prev');

let initialIndex = 1; 
const totalIndex = 4;  

// Next Button Functionality
mobileNext.addEventListener('click', () => {
    initialIndex = initialIndex < totalIndex ? initialIndex + 1 : 1; // Loop back to the first image
    mainImg.setAttribute('src', `images/image-product-${initialIndex}.jpg`);
});

// Previous Button Functionality
mobilePrev.addEventListener('click', () => {
    initialIndex = initialIndex > 1 ? initialIndex - 1 : totalIndex; // Loop back to the last image
    mainImg.setAttribute('src', `images/image-product-${initialIndex}.jpg`);
});

// mobile nav 

const openNav = document.getElementById('openMenu');
const closeNav = document.getElementById('closeMenu');
const menuBg = document.getElementById('nav-cover');
const navMenu = document.getElementById('navMenu');

openNav.addEventListener('click', ()=>{
    menuBg.style.display = 'block';
    navMenu.style.left = '0';
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', ()=>{
    menuBg.style.display = 'none';
    navMenu.style.left = '-70dvw';
    document.body.style.overflow = 'auto';
})