const clickArea = document.querySelector(".welcome_block");

clickArea.addEventListener('click',() => {
    document.querySelector("h1") .innerHTML= 'Have a Good Times!';
})

const buttonElement = document.querySelector(".button");
buttonElement.addEventListener('click',() => {
    document.querySelectorAll(".product_category2 ")[0].style.display = 'inline';
    document.querySelectorAll(".product_category2 ")[1].style.display = 'inline';
    document.querySelectorAll(".product_category2 ")[2].style.display = 'inline';
    document.querySelectorAll(".product_category2 ")[3].style.display = 'inline';
})