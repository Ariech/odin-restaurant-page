function createNav() {
  const nav = document.createElement("nav");
  const navItems = ["home", "menu", "contact"];

  navItems.forEach((item) => {
    let newItem = document.createElement("li");
    newItem.classList.add("nav-item");
    newItem.textContent = item.charAt(0).toUpperCase() + item.slice(1);
    nav.appendChild(newItem);
  });

  nav.classList.add("nav");
  return nav;
}

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const h1 = document.createElement("h1");
  h1.textContent = "Duckies";
  h1.classList.add("restaurant-name");

  header.appendChild(h1);
  header.appendChild(createNav());

  return header;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");

  return main;
}

function render() {
  const contentWrapper = document.getElementById("content");

  contentWrapper.appendChild(createHeader());
  contentWrapper.appendChild(createMain());
}

export { render };
