const clickArea = document.querySelector(".welcome_block");

clickArea.addEventListener('click',() => {
    document.querySelector("h1") .innerHTML= 'Have a Good Times!';
})

const buttonElement = document.querySelector(".button");
const productCategory2 = document.querySelectorAll(".product_category2 ")
buttonElement.addEventListener('click',() => {
    for (let i = 0; i <productCategory2.length; i++) {
        productCategory2[i].style.display = 'inline';
    }
})