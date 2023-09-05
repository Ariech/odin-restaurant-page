import addContactToMain from "./contact";
import addHomeToMain from "./home";
import addMenuToMain from "./menu";

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

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Coded by Ariech`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/Ariech";
  githubLink.setAttribute("target", "_blank");

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fa-brands");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function setButtonListeners() {
  const mainContent = document.querySelector(".main");
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const target = e.target.textContent;
      mainContent.innerHTML = "";

      if (target === "Home") addHomeToMain();
      if (target === "Menu") addMenuToMain();
      if (target === "Contact") addContactToMain();
    });
  });
}

function render() {
  const contentWrapper = document.getElementById("content");

  contentWrapper.appendChild(createHeader());
  contentWrapper.appendChild(createMain());
  contentWrapper.appendChild(createFooter());

  addHomeToMain();
  setButtonListeners();
}

export { render };
