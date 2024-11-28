
const mainImg = document.getElementById('bigImg');
const thumbOne = document.getElementById('itemone');
const thumbTwo = document.getElementById('itemtwo');
const thumbThree = document.getElementById('itemthree');
const thumbFour = document.getElementById('itemfour');

thumbOne.addEventListener('click', ()=>{
    thumbOne.classList.add('activeitem');
    thumbTwo.classList.remove('activeitem');
    thumbThree.classList.remove('activeitem');
    thumbFour.classList.remove('activeitem');
    mainImg.setAttribute('src', 'images/image-product-1.jpg')
})
thumbTwo.addEventListener('click', ()=>{
    thumbOne.classList.remove('activeitem');
    thumbTwo.classList.add('activeitem');
    thumbThree.classList.remove('activeitem');
    thumbFour.classList.remove('activeitem');
    mainImg.setAttribute('src', 'images/image-product-2.jpg')

})
thumbThree.addEventListener('click', ()=>{
    thumbOne.classList.remove('activeitem');
    thumbTwo.classList.remove('activeitem');
    thumbThree.classList.add('activeitem');
    thumbFour.classList.remove('activeitem');
    mainImg.setAttribute('src', 'images/image-product-3.jpg')

})
thumbFour.addEventListener('click', ()=>{
    thumbOne.classList.remove('activeitem');
    thumbTwo.classList.remove('activeitem');
    thumbThree.classList.remove('activeitem');
    thumbFour.classList.add('activeitem');
    mainImg.setAttribute('src', 'images/image-product-4.jpg')

})

// --------------------------------add to num---------------------

const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const amt = document.getElementById('amount');


