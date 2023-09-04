function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const hero = document.createElement("div");
  hero.classList.add("home-hero");

  const h2 = document.createElement("h2");
  h2.textContent = "Come and enjoy the best food with us!";
  h2.classList.add("home-h2");

  const h3 = document.createElement("h3");
  h3.textContent = "One click from the best food!";
  h3.classList.add("home-h3");

  const orderButtonWrapper = document.createElement("div");
  orderButtonWrapper.classList.add("order-button-wrapper");

  const orderButton = document.createElement("button");
  orderButton.textContent = "Order";
  orderButton.classList.add("order-button");

  hero.appendChild(h2);
  hero.appendChild(h3);
  orderButtonWrapper.appendChild(orderButton);

  home.appendChild(hero);
  home.appendChild(orderButtonWrapper);

  return home;
}

export default function addHomeToMain() {
  const main = document.querySelector(".main");
  main.appendChild(createHome());
}
