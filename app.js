const wrapper = document.querySelector(".NEW ARRIVALS");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Women handbag leather",
    price: 'INR 800',
    colors: [
        {
          code: "black",
          img: "./img/Ablack.1.png",
        },
        {
          code: "darkblue",
          img: "./img/Ablack.1.png",
        },
      ],
    },
  {
    id: 2,
    title: "Women Luxuary Black bag",
    price: 'INR 1000',
    colors: [
      {
        code: "black",
        img: "./img/Bblack.2A.png",
      },
      {
        code: "blue",
        img: "./img/Bblack.2A.png",
      },
    ],
  },
  {
    id: 3,
    title: "Tote Brown Bag",
    price: 'INR 1200',
    colors: [
      {
        code: "brown",
        img: "./img/Cbrown.1B.png",
      },
      {
        code: "black",
        img: "./img/Cbrown.1B.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
