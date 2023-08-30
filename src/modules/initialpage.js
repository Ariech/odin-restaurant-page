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

  header.appendChild(createNav());

  return header;
}

function render() {
  const contentWrapper = document.getElementById("content");

  contentWrapper.appendChild(createHeader());
}

export { render };
