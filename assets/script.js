const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav_links");
const overlay = document.querySelector(".overlay");
const close_btn = document.querySelector(".close-btn");
const plus_btn = document.getElementById("plus");
const minus_btn = document.getElementById("minus");
const item_num = document.querySelector(".item_num");
const cart = document.querySelector(".cart");
const cart_info = document.querySelector(".cart_container");
const add_to_cart_btn = document.querySelector('.add_to_cart');
const badge = document.querySelector(".number_of_items");

add_to_cart_btn.addEventListener("click", ()=>{
  cart_info.classList.add("show-cart-info");
  badge.classList.add("show-cart-info");
  update_screen_width();
})

const update_screen_width = () => {
  screenWidth = window.innerWidth;

  if(screenWidth > 768){
    cart_info.style.display = 'none';
  }
}


window.addEventListener("resize", update_screen_width);

cart.addEventListener("click", () => {
  cart_info.classList.toggle("show-cart-info");
  console.log('cart');
  update_screen_width();
});

hamburger.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the body
  overlay.classList.toggle("show-overlay");
  nav_links.classList.toggle("show");
});

close_btn.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the body
  nav_links.classList.remove("show");
  overlay.classList.remove("show-overlay");
});

let index = 0;
const images = document.querySelectorAll(".products img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showImage() {
  images.forEach((img, i) => {
    img.style.display = "none";
    img.style.opacity = "0";
    if (i === index) {
      img.style.display = "block";
      setTimeout(() => (img.style.opacity = "1"), 100); // slide animation
    }
  });
}

prevButton.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage();
});

nextButton.addEventListener("click", () => {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  showImage();
});

showImage(); // initial call to show the first image

let initial = 1;

const increase_cart_item_num = () => {
  // increment the initial by one
  initial++;
  // output it to the DOM
  item_num.innerText = initial;
  store = initial;
  badge.innerText = store;
  console.log(store);
};

const decrease_cart_item_num = () => {
  // decrease the inital by one
  initial--;
  // make sure it dosent go less than one
  if (initial < 1) {
    initial = 1;
  }
  // output it to the DOM
  item_num.innerText = initial;
  store = initial;
  badge.innerText = store;
};


plus_btn.onclick = () => {
  // call the increase function when the plsus btn is clicked
  increase_cart_item_num();
};

minus_btn.onclick = () => {
  // call the decrease function when the minus button is clicked
  decrease_cart_item_num();
};

// function showImage(url) {
//   var placeholder = document.querySelector(".placeholder");
//   var img = new Image();
//   img.onclick = function () {
//     placeholder.innerHTML = "";
//     placeholder.appendChild(img);
//   };
//   img.src = url;
// }
