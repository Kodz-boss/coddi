var icon = document.querySelector(".icon");
var cart = document.querySelector(".cart");
var menu = document.querySelector(".menu");
var addcart = document.querySelector(".addcart");

icon.addEventListener("click", () => {
    menu.classList.add("active");
    addcart.classList.remove("active1");
})

cart.addEventListener("click", () => {
    addcart.classList.add("active1");
    menu.classList.remove("active");
})