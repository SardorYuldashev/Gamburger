let ingridients = {
  cheese: {
    price: 2,
    img: "images/cheese.svg",
  },
  meat: {
    price: 5,
    img: "images/meat.svg",
  },
  onion: {
    price: 1,
    img: "images/onion.svg",
  },
  salad: {
    price: 1,
    img: "images/salad.svg",
  },
  tomato: {
    price: 2,
    img: "images/tomato.svg",
  },
  pickle: {
    price: 3,
    img: "images/pickle.svg",
  },
};

const box = document.querySelector(".burger__content-reverse");
const btns = document.querySelectorAll(".main__content-btn");
const total = document.querySelector(".main__content-price");
const buttons = document.querySelectorAll('.main__content-button');
const chek = document.querySelector('.main__chek-wrapper');
const chekClose = document.querySelector('.main__chek-close');
const chekTime = document.querySelector('.chekTime');
const chekNumber = document.querySelector('.main__chek-number');
const chekTotal = document.querySelector('.chekTotal')

let totalPrice = 2;
total.textContent = `Total: $${totalPrice}`;

function createLayer(arg) {
  const layer = document.createElement("div");
  layer.classList.add("burger__content-slice", `${arg}`);

  const img = document.createElement("img");
  img.setAttribute("src", ingridients[arg].img);

  layer.append(img);
  box.append(layer);

  totalPrice += ingridients[arg].price;
  total.textContent = `Total: $${totalPrice}`;

  newPrice = totalPrice
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("cheese")) {
      createLayer("cheese");
    } else if (btn.classList.contains("meat")) {
      createLayer("meat");
    } else if (btn.classList.contains("onion")) {
      createLayer("onion");
    } else if (btn.classList.contains("salad")) {
      createLayer("salad");
    } else if (btn.classList.contains("tomato")) {
      createLayer("tomato");
    } else if (btn.classList.contains("pickle")) {
      createLayer("pickle");
    }
  });
});

box.addEventListener('click', (e) => {
  if (e.target.parentElement.classList.contains('cheese')) {
    totalPrice -= ingridients.cheese.price;
    total.textContent = `Total: $${totalPrice}`;
  } else if (e.target.parentElement.classList.contains('meat')) {
    totalPrice -= ingridients.meat.price;
    total.textContent = `Total: $${totalPrice}`;
  } else if (e.target.parentElement.classList.contains('onion')) {
    totalPrice -= ingridients.onion.price;
    total.textContent = `Total: $${totalPrice}`;
  } else if (e.target.parentElement.classList.contains('salad')) {
    totalPrice -= ingridients.salad.price;
    total.textContent = `Total: $${totalPrice}`;
  } else if (e.target.parentElement.classList.contains('tomato')) {
    totalPrice -= ingridients.tomato.price;
    total.textContent = `Total: $${totalPrice}`;
  } else if (e.target.parentElement.classList.contains('pickle')) {
    totalPrice -= ingridients.pickle.price;
    total.textContent = `Total: $${totalPrice}`;
  }
  e.target.parentElement.remove()
})


buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('red')) {
      totalPrice = 2;
      total.textContent = `Total: $${totalPrice}`;
      box.innerHTML = ''
    } else if (button.classList.contains('blue')) {
      chek.style.display = 'block'
      const now = new Date();      
      chekTime.innerHTML = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}/${now.getHours()}:${now.getMinutes()}`;
      chekNumber.innerHTML = `B${Math.floor(Math.random()*(999-100)+100)}`;
      chekTotal.innerHTML = `Summa: $${totalPrice}`
      totalPrice = 2;
    }
  })
})

chekClose.addEventListener('click', () => {
  chek.style.display = 'none'
  let totalPrice = 2;
  total.textContent = `Total: $${totalPrice}`;
  box.innerHTML = '';
})